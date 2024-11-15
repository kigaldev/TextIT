import React, { useState } from 'react';
import '../styles/TextEditor.css';
import StatusBar from './StatusBar';

const TextEditor = ({ fileName, editorContent, setEditorContent }) => {
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const newContent = e.target.value;
    setEditorContent(newContent);
    setCharCount(newContent.length);
    setWordCount(newContent.trim().split(/\s+/).length);
  };

  return (
    <div className="text-editor w-3/4 mx-auto">
      <textarea
        value={editorContent}
        onChange={handleTextChange}
        className="w-full h-96 text-black text-base font-medium resize-none focus:outline-none"
        placeholder="Escribe tu texto aquí..."
      />
      <div className="app-footer">
        <StatusBar charCount={charCount} wordCount={wordCount} fileName={fileName} />
      </div>
    </div>
  );
};

export default TextEditor;