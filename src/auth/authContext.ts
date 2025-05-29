import { createContext } from 'react';

export interface User {
  id_pessoa: string;
  nome_pessoa: string;
  email: string;
  foto: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    fields: {
      acesso_permitido: boolean;
      token: string;
      trocar_senha: boolean;
      nome_pessoa: string;
      mensagem?: string;
    };
    operation_id: string;
    registers_count: number;
    response: {
      ok: boolean;
      message: string;
      stack_trace: string;
    };
  };
}

export interface AuthContextType {
  user: User | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
