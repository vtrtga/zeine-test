import { useState } from "react";
import Button from "../button/button";
import Input from "../input/input";
import useTexts from "@/hooks/useTexts";
import { UserFormValues } from "@/types";

interface Props {
  onSubmit: (values: UserFormValues) => void;
  loading?: boolean;
}
export default function UserRegisterForm({ onSubmit, loading }: Props) {
  const { USER_REGISTER } = useTexts();

  const [values, setValues] = useState<UserFormValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md p-4">
      <p className="text-gray-600">{USER_REGISTER.DESCRIPTION}</p>

      <Input
        name="name"
        placeholder={USER_REGISTER.NAME_PLACEHOLDER}
        value={values.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder={USER_REGISTER.EMAIL_PLACEHOLDER}
        value={values.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder={USER_REGISTER.PASSWORD_PLACEHOLDER}
        value={values.password}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder={USER_REGISTER.CONFIRM_PASSWORD_PLACEHOLDER}
        value={values.confirmPassword}
        onChange={handleChange}
      />
      <Input
        type="date"
        name="birthDate"
        placeholder={USER_REGISTER.BIRTHDATE_PLACEHOLDER}
        value={values.birthDate}
        onChange={handleChange}
      />
      <Input
        name="phone"
        placeholder={USER_REGISTER.PHONE_PLACEHOLDER}
        value={values.phone}
        onChange={handleChange}
      />
      <Button type="submit" disabled={loading} className="btn-register">
        {loading ? USER_REGISTER.LOADING : USER_REGISTER.REGISTER}
      </Button>
    </form>
  );
}