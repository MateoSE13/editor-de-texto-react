import React from 'react';

interface Props {
  onColorChange: (color: string) => void; 
  toggleBold: () => void; // Function to toggle bold
  toggleItalic: () => void; // Function to toggle italic
  toggleUnderline: () => void; // Function to toggle underline
}

const ThemeSelector: React.FC<Props> = ({ onColorChange, toggleBold, toggleItalic, toggleUnderline }) => {
  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF', 
    '#FFC300', '#FF914D', '#4DFF94', '#4D94FF', '#FF4D4D'
  ];

  return (
    <div className="theme-selector">
      {/* Buttons to change the text color */}
      <div className="color-picker">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
            className="color-button"
          />
        ))}
      </div>

      {/* Format buttons */}
      <div className="format-buttons">
        <button onClick={toggleBold} className="format-button">N</button>
        <button onClick={toggleItalic} className="format-button">C</button>
        <button onClick={toggleUnderline} className="format-button">S</button>
      </div>
    </div>
  );
};

export default ThemeSelector;
