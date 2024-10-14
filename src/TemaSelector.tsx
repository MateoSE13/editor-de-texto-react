import React from 'react';

interface Props {
  onColorChange: (color: string) => void; 
  toggleBold: () => void; // Función para alternar negrita
  toggleItalic: () => void; // Función para alternar cursiva
  toggleUnderline: () => void; // Función para alternar subrayado
}

const TemaSelector: React.FC<Props> = ({ onColorChange, toggleBold, toggleItalic, toggleUnderline }) => {
  const colores = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF', 
    '#FFC300', '#FF914D', '#4DFF94', '#4D94FF', '#FF4D4D'
  ];

  return (
    <div className="tema-selector">
      {/* Botones para cambiar el color del texto */}
      <div className="color-picker">
        {colores.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
            className="color-button"
          />
        ))}
      </div>

      {/* Botones de formato */}
      <div className="format-buttons">
        <button onClick={toggleBold} className="format-button">N</button>
        <button onClick={toggleItalic} className="format-button">C</button>
        <button onClick={toggleUnderline} className="format-button">S</button>
      </div>
    </div>
  );
};

export default TemaSelector;
