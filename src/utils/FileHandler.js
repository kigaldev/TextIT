import fs from 'fs';
import path from 'path';

export const openFile = () => {
  // Funcionalidad para abrir un archivo
  const filePath = dialog.showOpenDialogSync();
  if (filePath) {
    const fileContent = fs.readFileSync(filePath[0], 'utf8');
    return { fileContent, filePath: filePath[0] };
  }
  return null;
};

export const saveFile = (content, filePath) => {
  // Funcionalidad para guardar un archivo
  if (filePath) {
    fs.writeFileSync(filePath, content, 'utf8');
  } else {
    const newFilePath = dialog.showSaveDialogSync();
    if (newFilePath) {
      fs.writeFileSync(newFilePath, content, 'utf8');
      return newFilePath;
    }
  }
  return null;
};