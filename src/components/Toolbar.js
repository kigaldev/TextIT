import React from 'react';
import { Save, Copy, Scissors } from 'lucide-react';

const Toolbar = ({ handleNew, handleOpen, handleSave, handleSaveAs }) => {
  return (
    <div className="toolbar">
      <button className="bg-white text-gray-700 hover:bg-gray-200 p-2 rounded-md mr-2" onClick={handleNew}>
        <Save className="w-5 h-5" />
      </button>
      <button className="bg-white text-gray-700 hover:bg-gray-200 p-2 rounded-md mr-2" onClick={handleOpen}>
        <Copy className="w-5 h-5" />
      </button>
      <button className="bg-white text-gray-700 hover:bg-gray-200 p-2 rounded-md mr-2" onClick={handleSave}>
        <Scissors className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Toolbar;