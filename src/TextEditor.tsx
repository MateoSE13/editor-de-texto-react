import React, { useState, useRef, useEffect } from 'react';
import ThemeSelector from './ThemeSelector'; 
import './TextEditor.css'; // Asegúrate de que este archivo CSS exista

const TextEditor: React.FC = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000'); // Color inicial
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fontFamily, setFontFamily] = useState('Arial'); // Fuente inicial
  const [fontSize, setFontSize] = useState('16px'); // Tamaño de fuente inicial
  const [background, setBackground] = useState('#FFFFFF'); // Color de fondo

  const textAreaRef = useRef<HTMLDivElement>(null); // useRef para el área editable

  // Funciones para manejar cambios de estilo
  const toggleBold = () => setIsBold((prev) => !prev);
  const toggleItalic = () => setIsItalic((prev) => !prev);
  const toggleUnderline = () => setIsUnderline((prev) => !prev);

  // Cambiar el color del texto
  const onColorChange = (color: string) => {
    setColor(color);
  };

  // Cambiar la fuente del texto
  const onFontChange = (font: string) => {
    setFontFamily(font);
  };

  // Cambiar el tamaño de la fuente
  const onFontSizeChange = (size: string) => {
    setFontSize(size);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus(); // Enfocar el área de texto al cargar
    }
  }, []);

  // Función para colocar el cursor al final del contenido
  const moveCursorToEnd = () => {
    const element = textAreaRef.current;
    if (element) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(element);
      range.collapse(false); // Colapsa el rango al final del contenido
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  return (
    <div className="text-editor" style={{ backgroundColor: background }}>
      <ThemeSelector
        onColorChange={onColorChange}
        toggleBold={toggleBold}
        toggleItalic={toggleItalic}
        toggleUnderline={toggleUnderline}
      />

      {/* Selector de Fuente */}
      <div className="font-selector">
        <label>Font Family: </label>
        <select value={fontFamily} onChange={(e) => onFontChange(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>

      {/* Selector de Tamaño de Fuente */}
      <div className="font-size-selector">
        <label>Font Size: </label>
        <select value={fontSize} onChange={(e) => onFontSizeChange(e.target.value)}>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
        </select>
      </div>

      <div
        ref={textAreaRef} // Referencia al área de texto editable
        contentEditable
        suppressContentEditableWarning
        style={{
          color: color,
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textDecoration: isUnderline ? 'underline' : 'none',
          fontFamily: fontFamily, // Fuente seleccionada
          fontSize: fontSize, // Tamaño de fuente seleccionado
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '200px',
          borderRadius: '5px',
          marginTop: '10px',
        }}
        onInput={(e) => {
          setText(e.currentTarget.textContent || '');
          moveCursorToEnd(); // Mueve el cursor al final
        }}
      >
        {text}
      </div>

      {/* Vista previa del texto */}
      <div className="preview" style={{ color: color, fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal', textDecoration: isUnderline ? 'underline' : 'none', fontFamily: fontFamily, fontSize: fontSize }}>
        <h3>Preview:</h3>
        <p>{text || "Type something to see the preview..."}</p>
      </div>
    </div>
  );
};

export default TextEditor;
