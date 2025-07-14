"use client";
import { useState } from "react";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import useTexts from "@/hooks/useTexts";
import { ProductFormValues } from "@/types";

interface ProductFormProps {
    onSubmit: (values: ProductFormValues) => void;
    loading?: boolean;
}

export default function ProductForm({ onSubmit, loading }: ProductFormProps) {
    const [values, setValues] = useState<ProductFormValues>({
        title: "",
        description: "",
        price: 0,
        imageUrl: "",
        category: "",
        status: "ativo",
    });
    const { PRODUCT_REGISTER } = useTexts();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: name === "price" ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md w-full p-4">
            <Input name="title" placeholder="Título" value={values.title} onChange={handleChange} />
            <Input name="description" placeholder="Descrição" value={values.description} onChange={handleChange} />
            <Input type="number" name="price" placeholder="Preço" value={String(values.price)} onChange={handleChange} />
            <Input name="imageUrl" placeholder="URL da imagem" value={values.imageUrl} onChange={handleChange} />
            <Input name="category" placeholder="Categoria" value={values.category} onChange={handleChange} />

            <select name="status" value={values.status} onChange={handleChange} className="border border-gray-300 rounded p-2">
                <option value="ativo">{PRODUCT_REGISTER.STATUS_ACTIVE}</option>
                <option value="inativo">{PRODUCT_REGISTER.STATUS_INACTIVE}</option>
                <option value="vendido">{PRODUCT_REGISTER.STATUS_SOLD}</option>
            </select>

            <Button type="submit" disabled={loading} loading={loading} className="btn-register">
                {PRODUCT_REGISTER.REGISTER}
            </Button>
        </form>
    );
}
