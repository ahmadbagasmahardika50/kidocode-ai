import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import KidoBot from "./components/KidoBot";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "KidoCode AI",
  description: "Belajar coding seru untuk anak SD!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${quicksand.className} antialiased`}>
        {children}
        <KidoBot />
      </body>
    </html>
  );
}