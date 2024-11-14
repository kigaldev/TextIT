import React from 'react';

const StatusBar = ({ charCount, wordCount }) => {
  return (
    <div className="flex justify-between items-center p-2 text-sm">
      <span>Caracteres: {charCount}</span>
      <span>Palabras: {wordCount}</span>
    </div>
  );
};

export default StatusBar;