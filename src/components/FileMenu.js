import React, { useState } from 'react';

const FileMenu = ({ fileName, setFileName, editorContent, setEditorContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNew = () => {
    setFileName('');
    setEditorContent('');
  };

  const handleOpen = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      setFileName(file.name);
      readFileContent(file);
    });
    fileInput.click();
  };

  const readFileContent = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setEditorContent(reader.result);
    };
    reader.readAsText(file);
  };

  const handleSave = () => {
    saveFile(fileName || 'sin_título.txt', editorContent);
  };

  const handleSaveAs = () => {
    const newFileName = prompt('Ingresa un nombre de archivo:');
    if (newFileName) {
      setFileName(newFileName);
      saveFile(newFileName, editorContent);
    }
  };

  const saveFile = (name, content) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = name;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="bg-white text-gray-700 hover:bg-gray-200 p-2 rounded-md"
      >
        <i className="lucide-file" />
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg mt-2 w-40">
          <li
            className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
            onClick={handleNew}
          >
            Nuevo
          </li>
          <li
            className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
            onClick={handleOpen}
          >
            Abrir
          </li>
          <li
            className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
            onClick={handleSave}
          >
            Guardar
          </li>
          <li
            className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
            onClick={handleSaveAs}
          >
            Guardar como
          </li>
        </ul>
      )}
    </div>
  );
};

export default FileMenu;