import React from 'react';
import TextEditor from './components/TextEditor';
import Toolbar from './components/Toolbar';
import FileMenu from './components/FileMenu';
import StatusBar from './components/StatusBar';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <FileMenu />
        <Toolbar />
      </header>
      <main className="app-main">
        <TextEditor />
      </main>
      <footer className="app-footer">
      </footer>
    </div>
  );
};

export default App;