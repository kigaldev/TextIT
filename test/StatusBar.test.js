import React from 'react';
import { render } from '@testing-library/react';
import StatusBar from '../components/StatusBar';

describe('StatusBar', () => {
  test('displays character and word count', () => {
    const { getByText } = render(<StatusBar charCount={100} wordCount={20} />);
    expect(getByText('Caracteres: 100')).toBeInTheDocument();
    expect(getByText('Palabras: 20')).toBeInTheDocument();
  });
});