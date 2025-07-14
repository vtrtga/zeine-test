"use client";
import "@/card.css";
import Image from "next/image";
import Button from "@/components/button/button";
import { Product } from "@/types";

export interface ProductCardProps {
    product: Product;
    onDelete: (id: string) => void;
}

export default function ProductCard({
    product,
    onDelete,
}: ProductCardProps) {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="product-image"
                />
            </div>
            <div className="product-info flex text-justify">
                <h3 className="product-title flex justify-center p-2">{product.title}</h3>
                <p className="product-description h-28">{product.description}</p>
                <p className="product-price">R$ {product.price.toFixed(2)}</p>
                <p className="product-category">{product.category}</p>
            </div>
            <div className="btn-delete-container">
                <Button onClick={() => onDelete(product.id)} className="delete-button">
                    Excluir
                </Button>
            </div>
        </div>
    );
}
