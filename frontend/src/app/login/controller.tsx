"use client";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { LoginFormValues } from "@/components/form-login/form-login";
import LoginView from "./view";

function LoginController() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: LoginFormValues) => {
    try {
      setLoading(true);
      await login(values.email, values.password);
    } catch (err) {
      alert("Erro ao fazer login.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return <LoginView handleLogin={handleLogin} loading={loading} />;
}

export default LoginController;
