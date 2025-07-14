"use client";
import { useCallback, useEffect, useState } from "react";
import ProductView from "./view";
import { Product } from "@/types";
import { deleteProduct, getProducts } from "@/api/service";

function ProductController() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await getProducts();
      setAllProducts(res)
      setProducts(res);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id, localStorage.getItem("token") || "");
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      console.error("Erro ao deletar produto:", err);
    }
  };

  const handleFilter = useCallback((text: string, status: string) => {
    let filtered = allProducts;

    if (text) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(text.toLowerCase()) ||
          p.description.toLowerCase().includes(text.toLowerCase())
      );
    }

    if (status) {
      filtered = filtered.filter((p) => p.status === status);
    }

    setProducts(filtered);
  }, [allProducts]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductView
      onFilter={handleFilter}
      products={products}
      loading={loading}
      onDelete={handleDelete}
    />
  );
}

export default ProductController;
