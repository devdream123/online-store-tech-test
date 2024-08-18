import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components";
import { CartContextProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartContextProvider>
        <body className={`${inter.className} max-w-screen-xxl m-auto`}>
          <TopNav></TopNav>
          {children}
        </body>
      </CartContextProvider>
    </html>
  );
}
