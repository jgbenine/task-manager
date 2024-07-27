'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation'

type SessionContextType = {
  session: {
    user: {
      email: string;
      id: string;
    };
    expires: string;
  } | null;
  logOut: () => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const router = useRouter();


  // Transforme os dados de sessão para o formato desejado
  const sessionData = session ? {
    user: {
      email: session.user?.email ?? '',
      id: session.user?.id ?? ''
    },
    expires: session.expires
  } : null;


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
