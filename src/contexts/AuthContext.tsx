import React, { createContext, useContext, useState, ReactNode } from "react";
import fetchToken from "../components/utils/fetchToken";

interface AuthContextType {
  handleSubmit: (e: React.FormEvent) => void;
  unique_id: string | undefined;
  setUnique_id: React.Dispatch<React.SetStateAction<string | undefined>>;
  credentials: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [unique_id, setUnique_id] = useState<string | undefined>(undefined);
  const [credentials, setCredentials] = useState({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = await fetchToken(unique_id);
    setCredentials(userData);
  };

  return (
    <AuthContext.Provider
      value={{ handleSubmit, unique_id, setUnique_id, credentials }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
