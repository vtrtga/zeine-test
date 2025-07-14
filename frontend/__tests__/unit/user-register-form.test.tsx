import { render, screen, fireEvent } from "@testing-library/react";
import useTexts from "@/hooks/useTexts";
import UserRegisterForm from "@/components/user-register-form/user-register-form";

jest.mock("@/hooks/useTexts", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("UserRegisterForm", () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    (useTexts as jest.Mock).mockReturnValue({
      USER_REGISTER: {
        DESCRIPTION: "Preencha os campos abaixo para se cadastrar.",
        NAME_PLACEHOLDER: "Nome completo",
        EMAIL_PLACEHOLDER: "E-mail",
        PASSWORD_PLACEHOLDER: "Senha",
        CONFIRM_PASSWORD_PLACEHOLDER: "Confirme a senha",
        BIRTHDATE_PLACEHOLDER: "Data de nascimento (opcional)",
        PHONE_PLACEHOLDER: "Telefone (opcional)",
        REGISTER: "Registrar",
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve permitir preencher os campos e submeter o formulário", () => {
    render(<UserRegisterForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("Nome completo"), {
      target: { value: "Vitor", name: "name" },
    });
    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: "vitor@email.com", name: "email" },
    });
    fireEvent.change(screen.getByPlaceholderText("Senha"), {
      target: { value: "123456", name: "password" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirme a senha"), {
      target: { value: "123456", name: "confirmPassword" },
    });
    fireEvent.change(screen.getByPlaceholderText("Data de nascimento (opcional)"), {
      target: { value: "2000-01-01", name: "birthDate" },
    });
    fireEvent.change(screen.getByPlaceholderText("Telefone (opcional)"), {
      target: { value: "65999999999", name: "phone" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Registrar/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      name: "Vitor",
      email: "vitor@email.com",
      password: "123456",
      confirmPassword: "123456",
      birthDate: "2000-01-01",
      phone: "65999999999",
    });
  });

  it("deve desabilitar o botão quando loading estiver true", () => {
    render(<UserRegisterForm onSubmit={mockSubmit} loading={true} />);
    const button = screen.getByTestId("register-button");
    expect(button).toBeDisabled();
  });

  it("deve mostrar mensagem de sucesso quando success for true", () => {
    render(<UserRegisterForm onSubmit={mockSubmit} success={true} />);
    expect(screen.getByText("Usuário registrado com sucesso!")).toBeInTheDocument();
  });
});
