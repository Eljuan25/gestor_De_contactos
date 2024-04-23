import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa el componente principal de la aplicación

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>,
  document.getElementById('root') // Renderiza dentro del elemento con el ID "root" en tu HTML
);