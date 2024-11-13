import React from 'react';

const StatusBar = ({ charCount, wordCount }) => {
  return (
    <div className="status-bar">
      <span>Caracteres: {charCount}</span>
      <span>Palabras: {wordCount}</span>
    </div>
  );
};

export default StatusBar;