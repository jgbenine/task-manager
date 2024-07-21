import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "@/scss/main.scss";

const opensans = Open_Sans({ subsets: ["latin"] });

export default async function RootLayout({ children, }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={opensans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
