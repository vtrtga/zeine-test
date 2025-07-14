import { render, screen, fireEvent } from "@testing-library/react";
import { useAuth } from "@/hooks/useAuth";
import useTexts from "@/hooks/useTexts";
import Header from "@/components/header/header";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

jest.mock("next/image", () => (props: any) => {
  return <img {...props} alt={props.alt} />;
});

jest.mock("@/hooks/useAuth", () => ({
  useAuth: jest.fn(),
}));

jest.mock("@/hooks/useTexts", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Header", () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      user: { id: "123", name: "Vitor" },
      logout: jest.fn(),
    });

    (useTexts as jest.Mock).mockReturnValue({
      HEADER: {
        LOGOUT: "Sair",
      },
    });

    localStorage.setItem("userName", "Vitor");
  });

  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("deve renderizar com o nome do usuário e os links de navegação", async () => {
    render(<Header />);

    expect(await screen.findByText("Produtos")).toBeInTheDocument();
    expect(screen.getByText("Novo produto")).toBeInTheDocument();
    expect(screen.getByText("Sair")).toBeInTheDocument();
    expect(screen.getByText("Vitor")).toBeInTheDocument();
  });

  it("deve executar logout ao clicar no botão 'Sair'", async () => {
    const mockedLogout = jest.fn();

    (useAuth as jest.Mock).mockReturnValue({
      user: { id: "123", name: "Vitor" },
      logout: mockedLogout,
    });

    render(<Header />);

    const logoutButton = await screen.findByText("Sair");
    fireEvent.click(logoutButton);

    expect(mockedLogout).toHaveBeenCalledTimes(1);
  });
});
