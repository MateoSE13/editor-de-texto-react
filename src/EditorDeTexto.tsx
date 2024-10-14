import React, { useState, useRef, useEffect } from 'react';
import TemaSelector from './TemaSelector'; // Asegúrate de que la ruta sea correcta
import './EditorDeTexto.css'; // Asegúrate de que este archivo CSS exista

const EditorDeTexto: React.FC = () => {
  const [texto, setTexto] = useState('');
  const [color, setColor] = useState('#000000'); // Color inicial
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fondo, setFondo] = useState('#FFFFFF'); // Color de fondo

  const areaTextoRef = useRef<HTMLDivElement>(null);

  // Funciones para manejar cambios de estilo
  const toggleBold = () => setIsBold((prev) => !prev);
  const toggleItalic = () => setIsItalic((prev) => !prev);
  const toggleUnderline = () => setIsUnderline((prev) => !prev);

  // Cambiar el color del texto
  const onColorChange = (color: string) => {
    setColor(color);
  };

  useEffect(() => {
    if (areaTextoRef.current) {
      areaTextoRef.current.focus(); // Enfocar el área de texto al cargar
    }
  }, []);

  return (
    <div className="editor-de-texto" style={{ backgroundColor: fondo }}>
      <TemaSelector
        onColorChange={onColorChange}
        toggleBold={toggleBold}
        toggleItalic={toggleItalic}
        toggleUnderline={toggleUnderline}
      />
      
      <div
        ref={areaTextoRef}
        contentEditable
        suppressContentEditableWarning
        style={{
          color: color,
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textDecoration: isUnderline ? 'underline' : 'none',
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '200px',
          borderRadius: '5px',
          marginTop: '10px',
        }}
        onInput={(e) => setTexto(e.currentTarget.textContent || '')}
      >
        {texto}
      </div>

      {/* Vista previa del texto */}
      <div className="preview" style={{ color: color, fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal', textDecoration: isUnderline ? 'underline' : 'none' }}>
        <h3>Vista Previa:</h3>
        <p>{texto || "Escribe algo para ver la vista previa..."}</p>
      </div>
    </div>
  );
};

export default EditorDeTexto;
