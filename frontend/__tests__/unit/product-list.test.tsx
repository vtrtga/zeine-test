import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from "@/components/product-list/product-list";
import { Product } from "@/types";

jest.mock("@/components/card/card", () => ({ product, onDelete }: any) => (
  <div data-testid="product-card">
    <h3>{product.title}</h3>
    <button onClick={() => onDelete(product.id)}>Excluir</button>
  </div>
));

describe("ProductList", () => {
  const mockProducts: Product[] = [
    {
      id: "1",
      title: "Guitarra",
      description: "Guitarra elétrica",
      imageUrl: "/guitarra.jpg",
      price: 1500,
      category: "Instrumentos",
      status: "ativo",
      stock: 5,
    },
    {
      id: "2",
      title: "Violão",
      description: "Violão acústico",
      imageUrl: "/violao.jpg",
      price: 800,
      category: "Instrumentos",
      status: "ativo",
      stock: 3,
    },
  ];

  it("deve renderizar uma mensagem quando não houver produtos", () => {
    render(<ProductList products={[]} onDelete={jest.fn()} />);
    expect(screen.getByText(/nenhum produto encontrado/i)).toBeInTheDocument();
  });

  it("deve renderizar os cards de produtos corretamente", () => {
    render(<ProductList products={mockProducts} onDelete={jest.fn()} />);
    const cards = screen.getAllByTestId("product-card");
    expect(cards).toHaveLength(2);
    expect(screen.getByText("Guitarra")).toBeInTheDocument();
    expect(screen.getByText("Violão")).toBeInTheDocument();
  });

  it("deve chamar onDelete ao clicar em Excluir", () => {
    const handleDelete = jest.fn();
    render(<ProductList products={mockProducts} onDelete={handleDelete} />);
    fireEvent.click(screen.getAllByText("Excluir")[0]);
    expect(handleDelete).toHaveBeenCalledWith("1");
  });
});
