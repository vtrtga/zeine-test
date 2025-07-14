'use client';
import { useState } from 'react';
import { validateField } from '../utils/input-validator';
import { usePathname } from 'next/navigation';

type InputTypes = 'email' | 'cpf' | 'date' | 'password' | 'text' | 'number' | 'file';

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
  name = '',
  value = '',
  onChange,
  className = '',
  disabled = false,
}: InputProps) {
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const pathname = usePathname();

  const handleBlur = () => {
    if (['email', 'cpf', 'date', 'password'].includes(type)) {
      const msg = validateField(type as any, value || '', pathname);
      setError(msg);
    } else {
      setError(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'file' && e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
    onChange?.(e);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...(type !== 'file' ? { value } : {})}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`border p-2 rounded w-full ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
        disabled={disabled}
      />
      {type === 'file' && fileName && (
        <span className="text-sm text-gray-600">Selecionado: {fileName}</span>
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
