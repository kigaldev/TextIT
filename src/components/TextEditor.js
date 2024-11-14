import React, { useState } from 'react';
import '../styles/TextEditor.css';
import StatusBar from './StatusBar';

const TextEditor = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
    setWordCount(newText.trim().split(/\s+/).length);
  };

  return (
    <div className="text-editor w-3/4 mx-auto">
      <textarea
        value={text}
        onChange={handleTextChange}
        className="w-full h-96 text-black text-base font-medium resize-none focus:outline-none"
        placeholder="Escribe tu texto aquí..."
      />
      <div className="app-footer">
        <StatusBar charCount={charCount} wordCount={wordCount} />
      </div>
    </div>
  );
};

export default TextEditor;