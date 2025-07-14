"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/api/service";
import UserRegisterView from "./view";
import { UserFormValues } from "@/types";

function UserRegisterController() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (values: UserFormValues) => {
    if (values.password !== values.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      await registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
        birthDate: values.birthDate,
        phone: values.phone,
      });
      router.push("/login");
    } catch (err) {
      console.error("Erro ao registrar usuário:", err);
      alert("Erro ao registrar usuário.");
    } finally {
      setLoading(false);
    }
  };

  return <UserRegisterView handleRegister={handleRegister} loading={loading} />;
}

export default UserRegisterController;
