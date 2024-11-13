import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextEditor from '../components/TextEditor';

describe('TextEditor', () => {
  test('renders textarea', () => {
    const { getByPlaceholderText } = render(<TextEditor />);
    expect(getByPlaceholderText('Escribe tu texto aquí...')).toBeInTheDocument();
  });

  test('updates text on input change', () => {
    const { getByPlaceholderText } = render(<TextEditor />);
    const textarea = getByPlaceholderText('Escribe tu texto aquí...');
    fireEvent.change(textarea, { target: { value: 'Nuevo texto' } });
    expect(textarea.value).toBe('Nuevo texto');
  });
});