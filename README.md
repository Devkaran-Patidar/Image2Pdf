# Image2PDF — Image to PDF Generator

A complete, production-quality Image to PDF Generator web application built with React, Vite, and Tailwind CSS. Convert your images (JPG, PNG, WEBP) into a single PDF directly in your browser.

## Features

- **Multiple Image Support**: Convert dozens of images into a single PDF document.
- **Drag & Drop**: Easily upload images by dragging them into the upload zone.
- **Image Reordering**: Native drag-and-drop to reorder images before generating.
- **Custom Page Sizes**: A4, A3, A5, Letter, Legal.
- **Page Orientation & Margins**: Customize portrait/landscape and margin settings.
- **Image Fit Options**: Contain, Cover, or Original dimensions.
- **Quality Control**: Select standard, high, or maximum output quality.
- **Client-Side Processing**: 100% privacy-first. All generation happens locally in your browser. No uploads.

## Tech Stack

- **React.js**: UI Framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling and utility classes
- **jsPDF**: Client-side PDF generation
- **react-dropzone**: Drag-and-drop file uploads
- **lucide-react**: Beautiful icons

## Project Structure

```
src/
├── components/       # Reusable UI components (Header, Hero, UploadZone, etc.)
├── lib/              # Utility libraries (tailwind merge)
├── utils/            # Core logic (image loading, pdf generation)
├── App.jsx           # Main application layout and state
├── main.jsx          # Entry point
└── index.css         # Global Tailwind styles
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build for Production

To create an optimized production build:

```bash
npm run build
```
The compiled files will be located in the `dist` directory.

## Privacy & Security

This application is designed with privacy in mind. All image processing and PDF generation is handled locally by the browser. No files are ever sent to an external server or third-party API.

## Future Improvements

- Add crop/rotate functionality for individual images.
- Support for generating multi-column image layouts per page.
- Compression preview allowing the user to see file size estimates before downloading.
