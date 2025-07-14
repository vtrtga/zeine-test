"use client";
import ProductList from "@/components/product-list/product-list";
import { Product } from "@/types";
import ProductFilter from "@/components/product-filter/product-filter";

interface ProductViewProps {
  products: Product[];
  loading: boolean;
  onDelete: (id: string) => void;
  onFilter: (text: string, status: string) => void;
}

export default function ProductView({
  products,
  loading,
  onDelete,
  onFilter
}: ProductViewProps) {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lista de Produtos</h1>
      <ProductFilter onFilter={onFilter} />
      <div className="mx-auto w-fit">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ProductList products={products} onDelete={onDelete} />
        )}
      </div>
    </div>
  );
}