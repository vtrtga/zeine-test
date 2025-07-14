'use client';
import { useState } from 'react';
import { validateField } from '../utils/input-validator';

type InputTypes = 'email' | 'cpf' | 'date' | 'password' | 'text' | 'number';

interface InputProps {
  type?: InputTypes;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  name?: string;
}

export default function Input({
  type = 'text',
  placeholder = '',
  name= '',
  value = '',
  onChange,
  className = '',
  disabled = false,
}: InputProps) {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = () => {
    if (['email', 'cpf', 'date', 'password'].includes(type)) {
      const msg = validateField(type as any, value || '');
      setError(msg);
    } else {
      setError(null);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={`border p-2 rounded w-full ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
        disabled={disabled}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
