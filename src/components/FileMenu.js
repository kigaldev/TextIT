import React, { useState } from 'react';

const FileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNew = () => {
    // Lógica para crear un nuevo archivo
    console.log('Nueva acción');
  };

  const handleOpen = () => {
    // Lógica para abrir un archivo
    console.log('Abrir acción');
  };

  const handleSave = () => {
    // Lógica para guardar un archivo
    console.log('Guardar acción');
  };

  const handleSaveAs = () => {
    // Lógica para guardar un archivo como
    console.log('Guardar como acción');
  };

  const handleClose = () => {
    // Lógica para cerrar el archivo
    console.log('Cerrar acción');
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
          <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer" onClick={handleNew}>
            Nuevo
          </li>
          <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer" onClick={handleOpen}>
            Abrir
          </li>
          <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer" onClick={handleSave}>
            Guardar
          </li>
          <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer" onClick={handleSaveAs}>
            Guardar como
          </li>
          <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer" onClick={handleClose}>
            Cerrar
          </li>
        </ul>
      )}
    </div>
  );
};

export default FileMenu;