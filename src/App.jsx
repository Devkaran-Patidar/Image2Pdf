import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import PrivacySection from './components/PrivacySection';
import Footer from './components/Footer';
import UploadZone from './components/UploadZone';
import ImageList from './components/ImageList';
import PdfSettings from './components/PdfSettings';
import PdfPreview from './components/PdfPreview';
import GenerateButton from './components/GenerateButton';
import { validateImage, loadImage } from './utils/imageUtils';
import { generatePDF } from './utils/pdfGenerator';

function App() {
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
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main>
        <Hero />

        {/* Generator Section */}
        <section id="generator" className="py-12 md:py-20 px-4 scroll-mt-20">
          <div className="container mx-auto max-w-7xl">
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
              <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 sticky top-24">
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

        <HowItWorks />
        <Features />
        <PrivacySection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
