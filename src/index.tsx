import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Si tienes estilos globales
import reportWebVitals from './reportWebVitals'; // Opcional, si lo tienes

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Asegúrate de que esto sea correcto
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si usas reportWebVitals
reportWebVitals();
