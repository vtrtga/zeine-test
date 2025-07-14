"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/api/service";
import { ProductFormValues } from "@/types";
import ProductRegisterView from "./view";

function ProductRegisterController() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (!storedToken) {
      router.push("/");
    } else {
      setToken(storedToken);
    }
  }, [router]);
  
  const handleRegister = async (values: ProductFormValues) => {
    if (!token) return;
    setLoading(true);
    try {
      await createProduct({ ...values }, token);
    } catch (err) {
      console.error("Erro ao registrar produto:", err);
      alert("Erro ao registrar produto.");
    } finally {
      setLoading(false);
    }
  };

  return <ProductRegisterView handleRegister={handleRegister} loading={loading} />;
}

export default ProductRegisterController;
