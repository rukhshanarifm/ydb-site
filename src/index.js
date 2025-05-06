import React, { useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

// Google Analytics tracking setup
const GoogleAnalytics = () => {
  useEffect(() => {
    // Inject Google Analytics script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SYL4WEMFJZ';
    script.async = true;
    document.head.appendChild(script);

    // Inject Google Analytics configuration
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SYL4WEMFJZ');
    `;
    document.head.appendChild(script2);
  }, []);

  return null; // This component doesn’t render anything
};

// Wrap App inside GoogleAnalytics component
const StrictApp = () => (
  <React.StrictMode>
    <GoogleAnalytics />
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  const root = createRoot(rootElement);
  root.render(<StrictApp />);
}
