"use client";
import { useState } from "react";

interface Props {
  onFilter: (text: string, status: string) => void;
}

export default function ProductFilter({ onFilter }: Props) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const handleFilter = () => {
    onFilter(text, status);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
      <input
        type="text"
        placeholder="Buscar por nome ou descrição"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full sm:w-1/2"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full sm:w-1/4"
      >
        <option value="">Todos os Status</option>
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
        <option value="Vendido">Vendido</option>
      </select>

      <button
        onClick={handleFilter}
        className=" text-white px-4 py-2 rounded btn-filter"
      >
        Filtrar
      </button>
    </div>
  );
}
