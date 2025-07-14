import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "@/components/card/card";
import { Product } from "@/types";

jest.mock("next/image", () => (props: any) => <img {...props} alt={props.alt} />);

describe("ProductCard", () => {
  const mockProduct: Product = {
    id: "1",
    title: "Produto Teste",
    description: "Descrição do produto teste",
    imageUrl: "http://example.com/image.png",
    category: "Categoria Teste",
    status: "ativo",
    price: 199.99,
    stock: 10,
  };

  it("deve renderizar os dados do produto", () => {
    render(<ProductCard product={mockProduct} onDelete={jest.fn()} />);

    expect(screen.getByText("Produto Teste")).toBeInTheDocument();
    expect(screen.getByText("Descrição do produto teste")).toBeInTheDocument();
    expect(screen.getByText("R$ 199.99")).toBeInTheDocument();
    expect(screen.getByText("Categoria Teste")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /produto teste/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Excluir/i })).toBeInTheDocument();
  });

  it("deve chamar onDelete com o id ao clicar no botão", () => {
    const handleDelete = jest.fn();
    render(<ProductCard product={mockProduct} onDelete={handleDelete} />);

    fireEvent.click(screen.getByRole("button", { name: /Excluir/i }));

    expect(handleDelete).toHaveBeenCalledWith("1");
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
