import React from 'react';

const PdfSettings = ({ settings, setSettings }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">PDF Settings</h3>
      
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Page Size</label>
          <select 
            name="pageSize" 
            value={settings.pageSize} 
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none"
          >
            <option value="A4">A4 (210 × 297 mm)</option>
            <option value="A3">A3 (297 × 420 mm)</option>
            <option value="A5">A5 (148 × 210 mm)</option>
            <option value="Letter">Letter (8.5 × 11 in)</option>
            <option value="Legal">Legal (8.5 × 14 in)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Orientation</label>
          <div className="flex gap-4">
            <label className="flex-1 cursor-pointer">
              <input type="radio" name="orientation" value="portrait" checked={settings.orientation === 'portrait'} onChange={handleChange} className="sr-only peer" />
              <div className="text-center px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl peer-checked:bg-indigo-50 peer-checked:border-indigo-500 peer-checked:text-indigo-700 font-medium transition-all">
                Portrait
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input type="radio" name="orientation" value="landscape" checked={settings.orientation === 'landscape'} onChange={handleChange} className="sr-only peer" />
              <div className="text-center px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl peer-checked:bg-indigo-50 peer-checked:border-indigo-500 peer-checked:text-indigo-700 font-medium transition-all">
                Landscape
              </div>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Margins</label>
          <select 
            name="margin" 
            value={settings.margin} 
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none"
          >
            <option value="none">None (0mm)</option>
            <option value="small">Small (10mm)</option>
            <option value="medium">Medium (20mm)</option>
            <option value="large">Large (30mm)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Image Fit</label>
          <select 
            name="imageFit" 
            value={settings.imageFit} 
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none"
          >
            <option value="contain">Contain (Fit to page)</option>
            <option value="cover">Cover (Fill entire page)</option>
            <option value="original">Original Size (If fits)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">PDF Quality</label>
          <select 
            name="quality" 
            value={settings.quality} 
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none"
          >
            <option value="standard">Standard (Smaller file size)</option>
            <option value="high">High (Good balance)</option>
            <option value="maximum">Maximum (Best quality)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Filename</label>
          <input 
            type="text" 
            name="filename" 
            value={settings.filename} 
            onChange={handleChange}
            placeholder="images-to-pdf.pdf"
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default PdfSettings;
