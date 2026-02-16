import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const loaderElement = document.getElementById('loader');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Remove loader once React starts rendering
  if (loaderElement) {
    // Small timeout to ensure visual smoothness
    setTimeout(() => {
      loaderElement.classList.add('loader-hidden');
      setTimeout(() => {
        loaderElement.style.display = 'none';
      }, 500);
    }, 100);
  }
} catch (e) {
  console.error("Mounting error:", e);
  const errorBox = document.getElementById('global-error');
  if (errorBox) {
    errorBox.style.display = 'block';
    errorBox.innerText = 'Mount Error: ' + (e as Error).message;
  }
}