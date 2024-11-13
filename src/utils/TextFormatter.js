export const countCharacters = (text) => {
    return text.length;
  };
  
  export const countWords = (text) => {
    return text.trim().split(/\s+/).length;
  };
  
  export const formatText = (text) => {
    // Agrega aquí lógica adicional para formatear el texto, como:
    // - Conversión a mayúsculas/minúsculas
    // - Eliminar espacios en blanco
    // - Aplicar estilos de fuente, etc.
    return text;
  };