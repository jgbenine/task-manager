import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Task Manager | To do list',
  description: '...',
}

export default async function RootLayout({ children, }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
