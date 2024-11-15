import React, { useState } from 'react';
import TextEditor from './components/TextEditor';
import Toolbar from './components/Toolbar';
import FileMenu from './components/FileMenu';

const App = () => {
  const [fileName, setFileName] = useState('');
  const [editorContent, setEditorContent] = useState('');

  const handleNew = () => {
    setFileName('');
    setEditorContent('');
  };

  const handleOpen = () => {
    // Lógica para abrir un archivo
  };

  const handleSave = () => {
    // Lógica para guardar un archivo
  };

  const handleSaveAs = () => {
    // Lógica para guardar un archivo como
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <FileMenu
          fileName={fileName}
          setFileName={setFileName}
          editorContent={editorContent}
          setEditorContent={setEditorContent}
        />
        <Toolbar
          handleNew={handleNew}
          handleOpen={handleOpen}
          handleSave={handleSave}
          handleSaveAs={handleSaveAs}
        />
      </header>
      <main className="app-main">
        <TextEditor
          fileName={fileName}
          editorContent={editorContent}
          setEditorContent={setEditorContent}
        />
      </main>
    </div>
  );
};

export default App;