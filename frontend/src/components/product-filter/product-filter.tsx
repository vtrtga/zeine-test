"use client";
import { StatusValues } from "@/types";
import { useState } from "react";

interface Props {
  onFilter: (text: string, status: StatusValues | null) => void;
}

export default function ProductFilter({ onFilter }: Props) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<StatusValues | null>(null);

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
        value={status || ""}
        onChange={(e) => {
          const value = e.target.value;
          setStatus(value === "" ? null : (value as StatusValues));
        }}
        className="border border-gray-300 p-2 rounded w-full sm:w-1/4"
      >
        <option value="">Todos os Status</option>
        <option value="ativo">Ativo</option>
        <option value="inativo">Inativo</option>
        <option value="vendido">Vendido</option>
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
