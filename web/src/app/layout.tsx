import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { auth } from "../../auth";
import { TaskProvider } from '@/contexts/TaskContext';
import { SessionProvider } from "@/contexts/SessionContext";
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Task Manager | To do list',
  description: '...',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <NextAuthProvider session={session}>
      <SessionProvider>
        <TaskProvider>
          <html lang="pt-BR" className={montserrat.className}>
            <body>
              <Header />
              {children}
              <Footer />
            </body>
          </html>
        </TaskProvider>
      </SessionProvider>
    </NextAuthProvider>
  );
}
