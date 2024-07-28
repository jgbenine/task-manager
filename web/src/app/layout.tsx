import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { auth } from "../../auth";
import { TaskProvider } from '@/contexts/TaskContext';
import { SessionProvider } from "@/contexts/SessionContext";
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
// import '../scss/utils/colors.scss';
import '../scss/main.scss';

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
            </body>
          </html>
        </TaskProvider>
      </SessionProvider>
    </NextAuthProvider>
  );
}
