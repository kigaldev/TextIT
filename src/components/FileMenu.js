import React, { useState } from 'react';

const FileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="file-menu">
      <button onClick={toggleMenu}>Archivo</button>
      {isOpen && (
        <ul className="menu-items">
          <li>Nuevo</li>
          <li>Abrir</li>
          <li>Guardar</li>
          <li>Guardar como</li>
          <li>Cerrar</li>
        </ul>
      )}
    </div>
  );
};

export default FileMenu;