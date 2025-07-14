import LoginForm, { LoginFormValues } from "@/components/form-login/form-login";

interface LoginViewProps {
  handleLogin: (values: LoginFormValues) => Promise<void>;
  loading: boolean;
}

function LoginView({ handleLogin, loading }: LoginViewProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-zeineWhite text-zeineBlack">
      <LoginForm onSubmit={handleLogin} loading={loading} />
    </div>
  );
}

export default LoginView;
