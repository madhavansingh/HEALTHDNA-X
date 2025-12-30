import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  organization: string;
  role: 'admin' | 'analyst' | 'viewer';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, name: string, organization: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for simulation
const DEMO_USERS: Record<string, { password: string; user: User }> = {
  'demo@healthdna-x.com': {
    password: 'demo123',
    user: {
      id: '1',
      email: 'demo@healthdna-x.com',
      name: 'Dr. Sarah Chen',
      organization: 'National Health Authority',
      role: 'admin',
    },
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('healthdna_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const demoUser = DEMO_USERS[email];
    
    if (demoUser && demoUser.password === password) {
      setUser(demoUser.user);
      localStorage.setItem('healthdna_user', JSON.stringify(demoUser.user));
      setIsLoading(false);
      return { success: true };
    }

    // For any other email/password combo, create a demo session
    if (email && password.length >= 6) {
      const newUser: User = {
        id: crypto.randomUUID(),
        email,
        name: email.split('@')[0],
        organization: 'Demo Organization',
        role: 'analyst',
      };
      setUser(newUser);
      localStorage.setItem('healthdna_user', JSON.stringify(newUser));
      setIsLoading(false);
      return { success: true };
    }

    setIsLoading(false);
    return { success: false, error: 'Invalid email or password' };
  };

  const signUp = async (
    email: string,
    password: string,
    name: string,
    organization: string
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (DEMO_USERS[email]) {
      setIsLoading(false);
      return { success: false, error: 'An account with this email already exists' };
    }

    if (password.length < 6) {
      setIsLoading(false);
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      name,
      organization,
      role: 'analyst',
    };

    setUser(newUser);
    localStorage.setItem('healthdna_user', JSON.stringify(newUser));
    setIsLoading(false);
    return { success: true };
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('healthdna_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
