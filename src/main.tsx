
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Laptop } from 'lucide-react'

// Update the favicon programmatically
const setFavicon = () => {
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon && favicon instanceof HTMLLinkElement) {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    
    // Get the canvas context
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Draw background
      ctx.fillStyle = '#4b5563'; // gray-600
      ctx.fillRect(0, 0, 64, 64);
      
      // Draw laptop icon in the center
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.beginPath();
      // Draw laptop base
      ctx.rect(12, 36, 40, 8);
      // Draw laptop screen
      ctx.rect(16, 16, 32, 20);
      ctx.stroke();
      
      // Convert canvas to data URL and update favicon
      const dataUrl = canvas.toDataURL('image/png');
      favicon.href = dataUrl;
      
      // Also create link elements for various icon sizes and formats
      // This helps with link previews and different devices
      const iconSizes = [16, 32, 64, 128, 192, 512];
      
      // Remove any existing icon links except the main one
      document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="shortcut icon"]').forEach(el => {
        if (el !== favicon) {
          el.remove();
        }
      });
      
      // Add icon links for different sizes
      iconSizes.forEach(size => {
        const link = document.createElement('link');
        link.rel = size === 16 ? 'shortcut icon' : 'icon';
        link.type = 'image/png';
        link.setAttribute('sizes', `${size}x${size}`); // Fixed: Using setAttribute instead of direct assignment
        link.href = dataUrl;
        document.head.appendChild(link);
      });
      
      // Add Apple touch icons
      const appleLink = document.createElement('link');
      appleLink.rel = 'apple-touch-icon';
      appleLink.setAttribute('sizes', '180x180'); // Fixed: Using setAttribute instead of direct assignment
      appleLink.href = dataUrl;
      document.head.appendChild(appleLink);
    }
  }
}

// Call the function to set favicon immediately
setFavicon();

// Also call when the page loads to ensure it's set
if (document.readyState === 'complete') {
  setFavicon();
} else {
  window.addEventListener('load', setFavicon);
}

createRoot(document.getElementById("root")!).render(<App />);
