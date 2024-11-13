import React, { useState } from 'react';
import '../styles/TextEditor.css';

const TextEditor = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="text-editor">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Escribe tu texto aquí..."
      />
    </div>
  );
};

export default TextEditor;