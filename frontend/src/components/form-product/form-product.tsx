"use client";
import "./form-product.css";
import { useState } from "react";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import useTexts from "@/hooks/useTexts";
import { ProductFormValues } from "@/types";
import ButtonLink from "../button-link/button-link";
import uploadFile from "@/api/api-upload";

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
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const res = await uploadFile(file)
            setValues((prev) => ({
                ...prev,
                imageUrl: res
            }));
            console.log(res);
        } catch (err) {
            console.error("Erro no upload da imagem:", err);
            alert("Erro ao fazer upload da imagem.");
        }
    };
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: name === "price" ? parseFloat(value) : value,
        }));
    };

    const onClickPublish = () => {
        alert("Produto publicado com sucesso!")
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!values.imageUrl) {
            alert("Por favor, envie uma imagem primeiro.");
            return;
        }
        onSubmit(values);
        alert("Produto cadastrado com sucesso!");
        setValues({
            title: "",
            description: "",
            price: 0,
            imageUrl: "",
            category: "",
            status: "ativo",
        });
    };

    return (
        <form onSubmit={handleSubmit} data-testid="product-form" className="flex flex-col gap-6 max-w-md w-full p-4">
            <Input name="title" placeholder="Título" value={values.title} onChange={handleChange} />
            <Input name="description" placeholder="Descrição" value={values.description} onChange={handleChange} />
            <Input type="number" name="price" placeholder="Preço" value={String(values.price)} onChange={handleChange} />
            <Input type="file" name="imageUrl" placeholder="URL da imagem" onChange={handleImageUpload} />
            <Input name="category" placeholder="Categoria" value={values.category} onChange={handleChange} />

            <select name="status" value={values.status} onChange={handleChange} className="border border-gray-300 rounded p-2">
                <option value="ativo">{PRODUCT_REGISTER.STATUS_ACTIVE}</option>
                <option value="inativo">{PRODUCT_REGISTER.STATUS_INACTIVE}</option>
                <option value="vendido">{PRODUCT_REGISTER.STATUS_SOLD}</option>
            </select>

            <Button type="submit" disabled={loading} loading={loading} className="btn-register">
                {PRODUCT_REGISTER.SAVE}
            </Button>
            <ButtonLink href="/" className="btn-link flex items-center border-2 border-gray-300 h-10 rounded">
                {PRODUCT_REGISTER.CANCEL}
            </ButtonLink>
            <Button type="button" disabled={loading} onClick={onClickPublish} loading={loading} className="bg-green-600 text-white">
                {PRODUCT_REGISTER.PUBLISH}
            </Button>
        </form>
    );
}
