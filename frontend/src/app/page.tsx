'use client'
import { ROUTE } from "@/app/routes/routes-url";
import ButtonLink from "@/components/button-link/button-link";
import useTexts from "@/hooks/useTexts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { HOME } = useTexts();
  const navigate = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate.push(ROUTE.PRODUCT);
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center px-4 bg-zeine text-zeine">
      <div className="flex flex-col items-center gap-6 text-center max-w-md pt-20">
        <Image
          src="/salesman.png"
          alt="Representação de um vendedor"
          width={180}
          height={180}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-semibold">Bem-vindo ao Painel do Vendedor</h1>
        <p className="text-lg text-zeine-gray">
          Gerencie seus produtos com praticidade e estilo. Acesse seu painel abaixo.
        </p>
        <ButtonLink href={ROUTE.LOGIN} className="bg-button">
          {HOME.ACCESS_PAINEL}
        </ButtonLink>
      </div>
    </div>
  );
}
