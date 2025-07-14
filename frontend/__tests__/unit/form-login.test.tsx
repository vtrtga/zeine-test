import LoginForm from "@/components/form-login/form-login";
import { fireEvent, render, screen } from "@testing-library/react";
jest.mock("@/hooks/useTexts", () => () => ({
  LOGIN: {
    EMAIL_PLACEHOLDER: "Digite seu e-mail",
    PASSWORD_PLACEHOLDER: "Digite sua senha",
    REGISTER: "Cadastre-se",
    ENTER: "Entrar",
  },
}));

describe("LoginForm", () => {
  it("renderiza inputs e botões corretamente", () => {
    render(<LoginForm onSubmit={jest.fn()} />);

    expect(screen.getByPlaceholderText("Digite seu e-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Cadastre-se/i })).toBeInTheDocument();
  });

  it("permite digitar nos campos e submete os dados", () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("Digite seu e-mail"), {
      target: { name: "email", value: "teste@email.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
      target: { name: "password", value: "123456" },
    });

    fireEvent.submit(screen.getByTestId("login-form"));

    expect(handleSubmit).toHaveBeenCalledWith({
      email: "teste@email.com",
      password: "123456",
    });
  });

  it("desativa o botão quando loading é true", () => {
    render(<LoginForm onSubmit={jest.fn()} loading={true} />);

    const button = screen.getByRole("button", { name: /Carregando/i });;
    expect(button).toBeDisabled();
  });
});
