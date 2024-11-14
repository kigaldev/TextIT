import React from 'react';
import { Save, Copy, Scissors } from 'lucide-react';

const Toolbar = () => {
  return (
    <div className="flex justify-start items-center bg-[#F7FAFC] border-b border-[#E2E8F0] p-2 md:p-3 lg:p-4">
      <button className="bg-white text-gray-700 hover:bg-gray-200 p-2 rounded-md mr-2">
        {/* Cambiado a <Save /> para guardar */}
        <Save className="w-5 h-5" />
      </button>
      <button className="bg-white text-gray-700 hover:bg-gray-200 p-2 rounded-md mr-2">
        {/* Cambiado a <Copy /> para copiar */}
        <Copy className="w-5 h-5" />
      </button>
      <button className="bg-white text-gray-700 hover:bg-gray-200 p-2 rounded-md">
        {/* Cambiado a <Scissors /> para cortar */}
        <Scissors className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Toolbar;
