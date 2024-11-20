import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
import { AppProvider } from "@/contexts/app";
import Image from "next/image";
import logo from "@/assets/images/logo2.jpg";

export const metadata: Metadata = {
  title: "Marmitaria Dona Creuza",
  description: "Sabor de quero mais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <header className="sticky w-full bg-red-800 text-[#f2f2f2] p-4 shadow-lg transition-transform duration-300 transform-gpu">
          <Image
            src={logo}
            alt="Logo da Marmitaria Dona Creusa"
            className="w-[50px] h-auto rounded-md"
          />
          <h1 className="text-2xl font-bold">Marmitaria Dona Creusa</h1>
        </header>

        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
