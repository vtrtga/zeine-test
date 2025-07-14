import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";

import { Inter, Playfair_Display } from "next/font/google";
import { AuthProvider } from "@/context/auth-context";
import RouteGuard from "./routes/route-guard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export const metadata: Metadata = {
  title: "Painel do Vendedor",
  description: "por Vitor Valim",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className="antialiased font-sans"
      >
        <AuthProvider>
          <Header />
          <RouteGuard>
            {children}
          </RouteGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
