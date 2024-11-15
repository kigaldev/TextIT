import React from 'react';

const StatusBar = ({ charCount, wordCount, fileName }) => {
  return (
    <div className="flex justify-between items-center p-2 text-sm">
      <span>Nombre de archivo: {fileName || 'sin_título.txt'}</span>
      <span>Caracteres: {charCount}</span>
      <span>Palabras: {wordCount}</span>
    </div>
  );
};

export default StatusBar;