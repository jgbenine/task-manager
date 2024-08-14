'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation'

type Session = {
  user?: {
    name: string;
    email: string;
    id: string;
  };
  expires: string;
};


type SessionContextType = {
  session: Session | null;
  logOut: () => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const router = useRouter();
  const sessionData = session as Session;

  const logOut = () => {
    try {
      router.push('/'); 
      signOut();
    } catch (e) {
      throw e;
    }
  };

  return (
    <SessionContext.Provider value={{ session: sessionData, logOut }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSessionContext() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('Componente esta sendo renderizado fora de um SessionProvider');
  }
  return context;
}
