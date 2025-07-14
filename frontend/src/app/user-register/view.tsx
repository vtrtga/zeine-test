import UserRegisterForm from "@/components/user-register-form/user-register-form";
import useTexts from "@/hooks/useTexts";
import { UserFormValues } from "@/types";

interface UserRegisterViewProps {
  handleRegister: (values: UserFormValues) => void;
  loading: boolean;
}

function UserRegisterView({ handleRegister, loading }: UserRegisterViewProps) {
  const { USER_REGISTER } = useTexts();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">{USER_REGISTER.TITLE}</h1>
      <UserRegisterForm onSubmit={handleRegister} loading={loading} />
    </div>
  );
}

export default UserRegisterView;
