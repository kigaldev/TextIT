import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toolbar from '../components/Toolbar';

describe('Toolbar', () => {
  test('renders buttons', () => {
    const { getByText } = render(<Toolbar />);
    expect(getByText('Abrir')).toBeInTheDocument();
    expect(getByText('Guardar')).toBeInTheDocument();
    expect(getByText('Cortar')).toBeInTheDocument();
    expect(getByText('Copiar')).toBeInTheDocument();
    expect(getByText('Pegar')).toBeInTheDocument();
  });
});