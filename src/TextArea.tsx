import React from 'react';

interface Props {
  texto: string;
  onTextoChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textoEstilizado: React.CSSProperties; // Prop para los estilos del texto
}

const TextArea: React.FC<Props> = ({ texto, onTextoChange, textoEstilizado }) => {
  return (
    <textarea
      className="text-area"
      value={texto}
      onChange={onTextoChange}
      placeholder="Escribe algo..."
      style={textoEstilizado} // Aplicar estilos al texto del área de texto
    />
  );
};

export default TextArea;
