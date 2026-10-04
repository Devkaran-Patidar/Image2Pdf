import React, { useState, useCallback } from 'react';
import UploadZone from '../components/UploadZone';
import ImageList from '../components/ImageList';
import PdfSettings from '../components/PdfSettings';
import PdfPreview from '../components/PdfPreview';
import GenerateButton from '../components/GenerateButton';
import { validateImage, loadImage } from '../utils/imageUtils';
import { generatePDF } from '../utils/pdfGenerator';

const Converter = () => {
  const [images, setImages] = useState([]);
  const [settings, setSettings] = useState({
    pageSize: 'A4',
    orientation: 'portrait',
    margin: 'none',
    imageFit: 'contain',
    quality: 'high',
    filename: 'images-to-pdf.pdf'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles) => {
    const newImages = [];
    for (const file of acceptedFiles) {
      if (validateImage(file)) {
        try {
          const imgData = await loadImage(file);
          newImages.push({
            id: Math.random().toString(36).substring(7) + Date.now().toString(36),
            ...imgData
          });
        } catch (error) {
          console.error("Failed to load image:", file.name, error);
        }
      }
    }
    setImages(prev => [...prev, ...newImages]);
  }, []);

  const handleGenerate = async () => {
    if (images.length === 0) return;
    
    setIsGenerating(true);
    setProgress(0);
    
    try {
      await generatePDF({
        images,
        ...settings,
        onProgress: (current, total) => {
          setProgress((current / total) * 100);
        }
      });
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Check console for details.");
    } finally {
      setIsGenerating(false);
      setProgress(0);
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 min-h-[calc(100vh-160px)]">
      <div className="container mx-auto max-w-7xl">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Convert Images to PDF</h1>
          <p className="text-slate-500 mt-2">Manage your images, customize settings, and generate a high-quality PDF document.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Upload & Image List */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Upload Images</h2>
              <UploadZone onDrop={onDrop} isCompact={images.length > 0} />
              <ImageList images={images} setImages={setImages} />
            </div>
          </div>

          {/* Right Column: Settings & Preview */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            <PdfSettings settings={settings} setSettings={setSettings} />
            
            <PdfPreview images={images} settings={settings} />
            
            <GenerateButton 
              onClick={handleGenerate} 
              isGenerating={isGenerating} 
              disabled={images.length === 0} 
              progress={progress}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Converter;
