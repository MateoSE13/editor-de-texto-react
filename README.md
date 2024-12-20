# Proyecto: Editor de Texto

Este proyecto es un editor de texto implementado en React, con capacidades de manejo de texto en tiempo real

1. ## Habilidades y Requerimientos Implementados

### Habilidad 1: Componente `TextArea` con Personalización de Texto

#### Descripción de la Habilidad
Crear un componente `TextArea` que reciba como propiedades el contenido de texto, un manejador de cambios y estilos personalizados para adaptar el aspecto del texto en el editor.

#### Código de Implementación
```typescript
import React from 'react';

interface Props {
  texto: string;
  onTextoChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textoEstilizado: React.CSSProperties; // Propiedad para aplicar estilos al texto
}

const TextArea: React.FC<Props> = ({ texto, onTextoChange, textoEstilizado }) => {
  return (
    <textarea
      className="text-area"
      value={texto}
      onChange={onTextoChange}
      placeholder="Escribe algo..."
      style={textoEstilizado} // Aplica estilos personalizados al área de texto
    />
  );
};

export default TextArea;

### Explicación Detallada

- **¿Qué hace este fragmento de código?**  
   Este fragmento de código define un componente `TextArea` en React que recibe tres propiedades: `texto`, `onTextoChange` y `textoEstilizado`. La propiedad `texto` contiene el contenido del área de texto, que se actualiza a medida que el usuario escribe. La propiedad `onTextoChange` es una función que maneja el evento de cambio de texto (`onChange`) para actualizar el valor de `texto` en el estado del componente padre. La propiedad `textoEstilizado` es un objeto de estilo en línea (`CSSProperties`) que permite aplicar diferentes estilos visuales al área de texto, tales como color, tamaño, tipo de fuente, y estilos de texto como negrita, cursiva y subrayado.

- **¿Cómo cumple con el requisito de la habilidad?**  
   Este código cumple con los requisitos del proyecto al permitir la personalización dinámica del área de texto en un editor. El uso de `textoEstilizado` permite a los usuarios aplicar múltiples estilos al texto sin necesidad de escribir estilos adicionales en el código base. Además, al utilizar la propiedad `onTextoChange`, el componente puede reaccionar a cambios en el texto, lo cual es esencial para un editor de texto en tiempo real.

- **¿Por qué es la mejor forma de implementarlo?**  
   Este enfoque es eficiente porque utiliza las capacidades de React para manejar cambios en el estado del componente (`texto`) y aplicar estilos a través de una propiedad (`textoEstilizado`). Al emplear el objeto `CSSProperties`, se consigue un control total sobre los estilos sin necesidad de manipular el DOM directamente. Esto no solo mejora la reutilización del componente, sino que también facilita la escalabilidad del proyecto, ya que se pueden agregar más propiedades o funcionalidades a la misma estructura sin complicar el código ni la lógica del componente.

2.  ## Habilidades y Requerimientos Implementados

### Habilidad 1: Estilización Visual del Editor con Cambios de Tema y Formato

#### Descripción de la Habilidad
Aplicar estilos CSS al editor de texto para controlar la apariencia del área de texto, los botones de formato y el tema general (claro, oscuro y sepia). Los usuarios deben poder cambiar el color del texto, aplicar negrita, cursiva, subrayado, y cambiar el tamaño y tipo de letra.

#### Código de Implementación

.editor-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.text-area {
  width: 100%;
  height: 200px;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.text-area:focus {
  border-color: #007bff;
  outline: none;
}

.theme-selector {
  margin-bottom: 20px;
  font-size: 16px;
}

.color-picker {
  margin-top: 10px;
  display: flex;
  gap: 10px; /* Espaciado entre botones de color */
  justify-content: center; /* Centra los botones de color */
}

.color-button {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

.color-button:hover {
  transform: scale(1.1);
}

.format-buttons {
  margin-top: 10px;
  display: flex; /* Flexbox para alinear botones */
  justify-content: center; /* Centra los botones de formato */
  gap: 10px; /* Espaciado entre botones */
}

.format-button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #6a11cb, #2575fc); /* Degradado */
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease; /* Transición suave */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.format-button:hover {
  background: linear-gradient(135deg, #8e44ad, #3498db); /* Cambia el degradado al hacer hover */
  transform: translateY(-3px); /* Eleva el botón al hacer hover */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Sombra más grande */
}

.format-button:active {
  transform: translateY(1px); /* Efecto de clic */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Menor sombra al hacer clic */
}

.preview {
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.editor-container.light {
  background-color: #ffffff;
}

.editor-container.dark {
  background-color: #2e2e2e;
  color: white;
}

.editor-container.sepia {
  background-color: #f4ecd8;
  color: #3b2e25;
}

.text-editor {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRUSFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFRAQFS0dFxkrLS0tKy0rLS0rLS0tLS0tLS0rKy0tLS0tLS0tLS0rLS0tLS0tKy03Ny0tLS0rNzctLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUH/8QALBABAQACAQIEBAYDAQAAAAAAAAECEQMSUSExQWEEE3HwgZGhscHRUuHxMv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgMF/8QAHxEBAQEBAAIDAQEBAAAAAAAAAAERAhIhMUFRA2Ei/9oADAMBAAIRAxEAPwD6lIaYdrbzlyntnMjg1qjkT1HEG0G0wxs9DUBUD6ofVGdxqdUTWpIlXAA2eh0ijYGj0A2R6MVPSejtKgnJNirEXEZpbPGbExa8eASaica5i1mI2N+LK42n8lfXPcvmTsGQpwn8r78VfNL5v0F/5F43Ny4a/wCOjLn+jO80vYZ68XP9+ptbyYmMZP1GOG/RrOCeq9lc5BucyH0SejPKQZclqdBbPodKoWioij0iLlBOgvQ0LhSK6U2CbA7iJiD6RT0NFCuQGCkpWCC0tluibE04qQYNpNDUiOgXA+vsMRr0UwPpGWWkdf36Ceou4+6eiDHkl8j8g9USHcfaHB1eguM8sL2xKYZdsW24Plz0E8XPy4X/ABjCz2sdnLL6MZaMdc+3PoNesKxisstgi2jS4ciJk0xFg6T6VyDpGsZ9IqqkSiVUqZACwUouQ0YsqOtUtE0WF1Cy05iCeoo0mJ9IZUHCyxZ5ctgm46IWdYXl/NXzBfKKucOe/h7IxuvejPl0Jv606fw/lNxm/wCPSe7m5PiKwyyvdcZv9J+O/Lkx9vwHzZ3eVvs04zGJ/W36ejjn4+CssnPw1qjpL6G23HyMdCUWXG/IxsF5O69i/LPpCrQJjnqbR6qVzXxxrjGcXjUbjUbRsuob1dRouteNncT5LQ6ls8wvoqmmcGSkkaTMrB0DUXKtkdlGpVWDaZn3WCMnPXRnIyyn/PUY6Z6OeArPKDAz5OzKr6RpWLtRophtrMWkxNPFz/LVON0DE1qcwuPFroYw0dJExXy6D2LkLLjnui5aaTXf9NiYT/L9Az8YXP3DonDj/lQJ4VzzA8cCl8KvEZkPQitFYNYVqLDpwRllanqdG0ZYQZsTOS9xcyuEPGB7PqacOXmMJPb8m2GhvmCYnYeyo6FRMitRchNXZE5bisMVXUDGGWX4e/8AUR1a9y58vp+7HQ5dde20z9h9WU20nH3E3SthSNLgV8PUML77C/fgUvaGBWqxqKueARrKTPi3/bbQ3PY0YKilSxO4iQRcA2Btz5T0XgnQg5NZU5UorQ1qQdTjdiApKuYqkDGXivXt+p2eLXGDUiMMWlioBucpGj0YqMsS6Wuj0GIxxZ/E43TXOX0RnyTysEuZjj1eyph9+Lo0Uncc/BlONfy6vqkReUXJCvH3t/YtSeURlzz6/Rl8/fl4DF6jbLJMlvkjCXvHZw4+H/oOZ5MMeJphxd3TcPv7rK3fgOnhIV15RXSrHDQuI1jKwpb2a3BF

### Explicación Detallada

- **¿Qué hace este fragmento de código?**  
   Este fragmento de código define los estilos visuales para el editor de texto, específicamente para la estructura del contenedor, el área de texto y los botones de cambio de tema. El `.editor-container` establece el diseño del editor, haciendo uso de flexbox para centrar los elementos. La clase `.text-area` se aplica al área de texto, proporcionando un tamaño de fuente y bordes estilizados. Además, los botones dentro de `.theme-selector` permiten cambiar entre temas de color (claro, oscuro, sepia), con transiciones suaves al interactuar. Los temas cambian el fondo del editor y el área de texto, ofreciendo tres opciones: `light`, `dark` y `sepia`.

- **¿Cómo cumple con el requisito de la habilidad?**  
   Este código cumple con el requisito de la habilidad de cambiar el tema visual del editor de texto y personalizar su apariencia. La funcionalidad de cambiar entre tres temas (claro, oscuro y sepia) está soportada por las clases dinámicas (`light`, `dark`, `sepia`) aplicadas al contenedor del editor y al área de texto. Además, los botones permiten a los usuarios seleccionar un tema sin tener que recargar la página, lo que proporciona una experiencia fluida. Los estilos CSS se aplican de manera eficiente para permitir que el área de texto reaccione a los cambios de tema con transiciones suaves, mejorando la experiencia visual.

- **¿Por qué es la mejor forma de implementarlo?**  
   Este enfoque es ideal porque aprovecha las capacidades de CSS para manejar el diseño y los estilos de manera eficiente. Usar clases CSS para manejar los temas permite cambiar fácilmente la apariencia del editor sin necesidad de JavaScript adicional. La estructura basada en flexbox asegura que los elementos estén correctamente alineados y respondan de manera flexible al tamaño de la pantalla. Las transiciones suaves mejoran la experiencia de usuario, haciendo que el cambio entre temas se sienta fluido. Además, la separación de las reglas de estilo por tema (claro, oscuro, sepia) facilita el mantenimiento y la escalabilidad del proyecto, ya que se pueden agregar más temas o estilos sin modificar el código del editor en sí.

3. ## Habilidades y Requerimientos Implementados

### Habilidad 1: Componente `TextEditor` con Personalización de Texto y Estilo

#### Descripción de la Habilidad
Crear un editor de texto que permita personalizar el color, la fuente, el tamaño de la fuente, y aplicar estilos como negrita, cursiva y subrayado. El área de texto debe ser editable, y los cambios deben reflejarse en tiempo real, tanto en el área de texto como en una vista previa del contenido.

#### Código de Implementación
```typescript
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

# Explicación Detallada

- **¿Qué hace este fragmento de código?**  
   Este fragmento de código define los estilos visuales para el editor de texto, específicamente para la estructura del contenedor, el área de texto y los botones de cambio de tema. El `.editor-container` establece el diseño del editor, haciendo uso de flexbox para centrar los elementos. La clase `.text-area` se aplica al área de texto, proporcionando un tamaño de fuente y bordes estilizados. Además, los botones dentro de `.theme-selector` permiten cambiar entre temas de color (claro, oscuro, sepia), con transiciones suaves al interactuar. Los temas cambian el fondo del editor y el área de texto, ofreciendo tres opciones: `light`, `dark` y `sepia`.

- **¿Cómo cumple con el requisito de la habilidad?**  
   Este código cumple con el requisito de la habilidad de cambiar el tema visual del editor de texto y personalizar su apariencia. La funcionalidad de cambiar entre tres temas (claro, oscuro y sepia) está soportada por las clases dinámicas (`light`, `dark`, `sepia`) aplicadas al contenedor del editor y al área de texto. Además, los botones permiten a los usuarios seleccionar un tema sin tener que recargar la página, lo que proporciona una experiencia fluida. Los estilos CSS se aplican de manera eficiente para permitir que el área de texto reaccione a los cambios de tema con transiciones suaves, mejorando la experiencia visual.

- **¿Por qué es la mejor forma de implementarlo?**  
   Este enfoque es ideal porque aprovecha las capacidades de CSS para manejar el diseño y los estilos de manera eficiente. Usar clases CSS para manejar los temas permite cambiar fácilmente la apariencia del editor sin necesidad de JavaScript adicional. La estructura basada en flexbox asegura que los elementos estén correctamente alineados y respondan de manera flexible al tamaño de la pantalla. Las transiciones suaves mejoran la experiencia de usuario, haciendo que el cambio entre temas se sienta fluido. Además, la separación de las reglas de estilo por tema (claro, oscuro, sepia) facilita el mantenimiento y la escalabilidad del proyecto, ya que se pueden agregar más temas o estilos sin modificar el código del editor en sí.

4. ## Habilidades y Requerimientos Implementados

### Habilidad 2: Componente `ThemeSelector` para Personalización de Estilos de Texto

#### Descripción de la Habilidad
Crear un componente `ThemeSelector` que permita al usuario personalizar el texto mediante la selección de colores, y aplicar estilos de formato como negrita, cursiva y subrayado. Este componente maneja la interacción con los botones para aplicar los estilos y cambiar el color del texto.

#### Código de Implementación

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

# Explicación Detallada

- **¿Qué hace este fragmento de código?**  
   Este fragmento de código define un componente `ThemeSelector` en React, el cual permite al usuario seleccionar un color para el texto y aplicar estilos de formato (negrita, cursiva y subrayado) mediante botones. La propiedad `onColorChange` permite cambiar el color del texto, y las propiedades `toggleBold`, `toggleItalic`, y `toggleUnderline` permiten alternar entre los estilos de formato para el texto. La lista de colores se mapea para generar un conjunto de botones, cada uno representando un color. Al hacer clic en uno de estos botones, el color del texto en el editor cambia. Los botones de formato se usan para aplicar o quitar los estilos de texto.

- **¿Cómo cumple con el requisito de la habilidad?**  
   Este código cumple con el requisito de permitir al usuario personalizar la apariencia del texto mediante la selección de colores y la aplicación de estilos de texto (negrita, cursiva y subrayado). Los botones de color permiten cambiar el color del texto de forma inmediata, y los botones de formato permiten aplicar estilos como negrita, cursiva y subrayado de manera rápida. La interfaz es interactiva y responde a las acciones del usuario en tiempo real, lo que mejora la experiencia de edición.

- **¿Por qué es la mejor forma de implementarlo?**  
   Esta implementación es eficiente porque centraliza el control del cambio de color y formato en funciones específicas (como `onColorChange` y `toggleBold`), lo que hace que el código sea más limpio y modular. El uso de una lista de colores para los botones permite un diseño sencillo y flexible para agregar o quitar colores sin modificar mucho el código. Además, al tener botones de formato dedicados, el usuario puede aplicar estilos de forma clara y directa. Esta estructura es escalable, ya que en el futuro se pueden agregar más opciones de formato sin complicar la lógica existente.
    
    
    

