export const validateImage = (file) => {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  return validTypes.includes(file.type);
};

export const loadImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const img = new Image();
      img.onload = () => {
        resolve({
          file,
          dataUrl,
          width: img.width,
          height: img.height,
        });
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = dataUrl;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
};

export const calculateFitDimensions = (imgWidth, imgHeight, maxWidth, maxHeight, fitMode) => {
  const imgRatio = imgWidth / imgHeight;
  const maxRatio = maxWidth / maxHeight;

  if (fitMode === 'original') {
    if (imgWidth <= maxWidth && imgHeight <= maxHeight) {
      return { width: imgWidth, height: imgHeight };
    }
    // If it exceeds page size, fallback to contain to prevent cropping
    fitMode = 'contain';
  }

  if (fitMode === 'contain') {
    if (imgRatio > maxRatio) {
      return { width: maxWidth, height: maxWidth / imgRatio };
    } else {
      return { width: maxHeight * imgRatio, height: maxHeight };
    }
  }

  if (fitMode === 'cover') {
    if (imgRatio > maxRatio) {
      return { width: maxHeight * imgRatio, height: maxHeight };
    } else {
      return { width: maxWidth, height: maxWidth / imgRatio };
    }
  }

  return { width: imgWidth, height: imgHeight };
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
