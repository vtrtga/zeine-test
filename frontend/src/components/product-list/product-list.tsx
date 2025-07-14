"use client";
import { Product } from "@/types";
import ProductCard from "../card/card";

interface ProductListProps {
  products: Product[];
  onDelete: (id: string) => void;
}

export default function ProductList({ products, onDelete }: ProductListProps) {
  if (products.length === 0) {
    return <p className="text-center text-gray-600">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
}