import { fireEvent, render, screen } from "@testing-library/react";
import ProductFilter from "@/components/product-filter/product-filter";

describe("ProductFilter", () => {
  it("deve permitir digitar texto, selecionar status e clicar em filtrar", () => {
    const handleFilter = jest.fn();

    render(<ProductFilter onFilter={handleFilter} />);

    const input = screen.getByPlaceholderText(/buscar por nome ou descrição/i);
    const select = screen.getByRole("combobox");
    const button = screen.getByRole("button", { name: /filtrar/i });

    fireEvent.change(input, { target: { value: "Guitarra" } });
    fireEvent.change(select, { target: { value: "ativo" } });
    fireEvent.click(button);

    expect(handleFilter).toHaveBeenCalledWith("Guitarra", "ativo");
    expect(handleFilter).toHaveBeenCalledTimes(1);
  });
});
