"use client";
import { useState } from "react";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import ButtonLink from "../button-link/button-link";
import useTexts from "@/hooks/useTexts";
import { ROUTE } from "@/api/const/routes-url";

export interface LoginFormValues {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: LoginFormValues) => void;
  loading?: boolean;
}

export default function LoginForm({ onSubmit, loading }: Props) {
  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const { LOGIN } = useTexts();

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md p-4  border-2 border-gray-300 rounded-lg shadow-md bg-white">
      <Input
        type="email"
        name="email"
        placeholder={LOGIN.EMAIL_PLACEHOLDER}
        value={values.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder={LOGIN.PASSWORD_PLACEHOLDER}
        value={values.password}
        onChange={handleChange}
      />
      <Button type="submit" disabled={loading} loading={true} className="btn-login">
        {LOGIN.ENTER}
      </Button>
      <ButtonLink className="btn-register-login" href={ROUTE.REGISTER}>
        {LOGIN.REGISTER}
      </ButtonLink>
    </form>
  );
}
