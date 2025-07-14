// src/components/ui/Input.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '@/components/input/input';

describe('Input component', () => {
  it('renderiza com placeholder', () => {
    render(<Input placeholder="Digite seu nome" />);
    expect(screen.getByPlaceholderText('Digite seu nome')).toBeInTheDocument();
  });

  it('chama onChange corretamente ao digitar', () => {
    const handleChange = jest.fn();
    render(<Input placeholder="E-mail" onChange={handleChange} />);
    const input = screen.getByPlaceholderText('E-mail');

    fireEvent.change(input, { target: { value: 'teste@exemplo.com' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('aplica classe customizada corretamente', () => {
    render(<Input className="text-red-500" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('text-red-500');
  });

  it('fica desabilitado quando `disabled` é true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
