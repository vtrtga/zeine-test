'use client';
import "../../header.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../button/button";
import useTexts from "@/hooks/useTexts";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/app/routes/routes-url";
import ButtonLink from "../button-link/button-link";
import { useAuth } from "@/hooks/useAuth";

function Header() {
  const [userName, setUserName] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { user, logout } = useAuth();
  const { HEADER } = useTexts();
  const router = useRouter();

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) setUserName(name);
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.replace(ROUTE.HOME);
    setUserName(null);
  };

  if (!isMounted) return null;

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-zblack text-zwhite">
      <div className="flex items-center gap-6">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        {user?.id && (
          <>
            <ButtonLink href={ROUTE.PRODUCT} className="btn-link-product-register ml-10 text-sm px-2 py-1">
              Produtos
            </ButtonLink>
            <ButtonLink href={ROUTE.PRODUCT_REGISTER} className="btn-link-product-register text-sm px-2 py-1">
              Cadastrar Produto
            </ButtonLink>
          </>
        )}
      </div>

      {user?.id && (
        <div className="flex items-center gap-3">
          <span className="text-sm text-zgray truncate max-w-[120px]">{userName || user.name}</span>
          <Button onClick={handleLogout} className="bg-gray-600 text-white text-sm h-6 px-4 flex items-center btn-link-register-p">
            {HEADER.LOGOUT}
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
