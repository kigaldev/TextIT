import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileMenu from '../components/FileMenu';

describe('FileMenu', () => {
  test('toggles menu items on button click', () => {
    const { getByText, queryByText } = render(<FileMenu />);
    const menuButton = getByText('Archivo');

    // Verificar que el menú esté inicialmente oculto
    expect(queryByText('Nuevo')).not.toBeInTheDocument();
    expect(queryByText('Abrir')).not.toBeInTheDocument();
    expect(queryByText('Guardar')).not.toBeInTheDocument();
    expect(queryByText('Guardar como')).not.toBeInTheDocument();
    expect(queryByText('Cerrar')).not.toBeInTheDocument();

    // Hacer clic en el botón del menú y verificar que se muestre el menú
    fireEvent.click(menuButton);
    expect(getByText('Nuevo')).toBeInTheDocument();
    expect(getByText('Abrir')).toBeInTheDocument();
    expect(getByText('Guardar')).toBeInTheDocument();
    expect(getByText('Guardar como')).toBeInTheDocument();
    expect(getByText('Cerrar')).toBeInTheDocument();
  });
});