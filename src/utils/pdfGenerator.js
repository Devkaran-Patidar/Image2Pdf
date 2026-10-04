import { jsPDF } from 'jspdf';
import { calculateFitDimensions } from './imageUtils';

const PAGE_SIZES = {
  a4: [210, 297],
  a3: [297, 420],
  a5: [148, 210],
  letter: [215.9, 279.4],
  legal: [215.9, 355.6]
};

const MARGINS = {
  none: 0,
  small: 10,
  medium: 20,
  large: 30
};

const compressImage = async (dataUrl, fileType, qualityLevel) => {
  if (qualityLevel === 'maximum' && fileType !== 'image/webp') {
    return { 
      dataUrl, 
      type: fileType.split('/')[1].toUpperCase() 
    };
  }
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      
      // Fill white background for transparent images converted to JPEG
      if (fileType === 'image/png' || fileType === 'image/webp') {
         ctx.fillStyle = '#FFFFFF';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0);
      
      let quality = 0.92;
      if (qualityLevel === 'standard') quality = 0.6;
      else if (qualityLevel === 'high') quality = 0.85;
      else quality = 1.0;

      const compressedData = canvas.toDataURL('image/jpeg', quality);
      resolve({ dataUrl: compressedData, type: 'JPEG' });
    };
    img.src = dataUrl;
  });
};

export const generatePDF = async ({ images, pageSize, orientation, margin, imageFit, quality, filename, onProgress }) => {
  const format = PAGE_SIZES[pageSize.toLowerCase()] || PAGE_SIZES.a4;
  const isLandscape = orientation === 'landscape';
  
  const pdf = new jsPDF({
    orientation: isLandscape ? 'l' : 'p',
    unit: 'mm',
    format: format
  });

  const pageWidth = isLandscape ? format[1] : format[0];
  const pageHeight = isLandscape ? format[0] : format[1];
  const marginValue = MARGINS[margin.toLowerCase()] ?? 0;

  const maxWidth = pageWidth - (marginValue * 2);
  const maxHeight = pageHeight - (marginValue * 2);

  for (let i = 0; i < images.length; i++) {
    const imgData = images[i];
    
    if (i > 0) {
      pdf.addPage();
    }

    if (onProgress) onProgress(i + 1, images.length);

    const { width, height } = calculateFitDimensions(
      imgData.width, 
      imgData.height, 
      maxWidth, 
      maxHeight, 
      imageFit
    );

    let x = marginValue;
    let y = marginValue;
    
    if (imageFit === 'contain' || imageFit === 'original') {
      x += (maxWidth - width) / 2;
      y += (maxHeight - height) / 2;
    } else if (imageFit === 'cover') {
      x += (maxWidth - width) / 2;
      y += (maxHeight - height) / 2;
    }

    const { dataUrl, type } = await compressImage(imgData.dataUrl, imgData.file.type, quality.toLowerCase());
    
    pdf.addImage(dataUrl, type, x, y, width, height, undefined, 'FAST');
  }

  // To support preview, we could return output string, but for now we'll just save
  // The app can use the generated pdf blob if needed
  const result = pdf.output('blob');
  
  // Download automatically
  const downloadUrl = URL.createObjectURL(result);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = filename || 'images-to-pdf.pdf';
  a.click();
  URL.revokeObjectURL(downloadUrl);

  return result;
};

// Expose a way to get data url for preview
export const getPdfPreviewUrl = async ({ images, pageSize, orientation, margin, imageFit, quality }) => {
  if (!images || images.length === 0) return null;
  // Generate a low res fast preview for just the first page or all pages?
  // Let's generate for all pages to preview the full pdf
  const format = PAGE_SIZES[pageSize.toLowerCase()] || PAGE_SIZES.a4;
  const isLandscape = orientation === 'landscape';
  
  const pdf = new jsPDF({
    orientation: isLandscape ? 'l' : 'p',
    unit: 'mm',
    format: format
  });

  const pageWidth = isLandscape ? format[1] : format[0];
  const pageHeight = isLandscape ? format[0] : format[1];
  const marginValue = MARGINS[margin.toLowerCase()] ?? 0;

  const maxWidth = pageWidth - (marginValue * 2);
  const maxHeight = pageHeight - (marginValue * 2);

  for (let i = 0; i < images.length; i++) {
    const imgData = images[i];
    if (i > 0) pdf.addPage();
    
    const { width, height } = calculateFitDimensions(
      imgData.width, 
      imgData.height, 
      maxWidth, 
      maxHeight, 
      imageFit
    );

    let x = marginValue;
    let y = marginValue;
    
    if (imageFit === 'contain' || imageFit === 'original') {
      x += (maxWidth - width) / 2;
      y += (maxHeight - height) / 2;
    } else if (imageFit === 'cover') {
      x += (maxWidth - width) / 2;
      y += (maxHeight - height) / 2;
    }

    // Force lower quality for preview speed
    const { dataUrl, type } = await compressImage(imgData.dataUrl, imgData.file.type, 'standard');
    pdf.addImage(dataUrl, type, x, y, width, height, undefined, 'FAST');
  }

  return pdf.output('datauristring');
};
