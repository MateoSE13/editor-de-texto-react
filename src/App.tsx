import React from 'react';
import './App.css'; // Asegúrate de que App.css existe en la carpeta src
import EditorDeTexto from './EditorDeTexto'; // Asegúrate de que la ruta al componente es correcta

function App() {
  return (
    <div className="App">
      <h1>Mi Editor de Texto</h1> {/* Título de la aplicación */}
      <EditorDeTexto /> {/* Componente del editor de texto */}
    </div>
  );
}

export default App;
