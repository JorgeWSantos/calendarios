import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api, apiLogin } from '../services/api';
import { AuthContext } from './authContext';
import type { LoginRequest, LoginResponse, User } from './authContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUserDatabyToken = async () => {
    try {
      const { data } = await api.get('/pessoa/dadospessoa');

      if (data.success) {
        const _userData = data.data[0];
        setUser(_userData);
        return _userData;
      } else {
        logout();
        return null;
      }
    } catch (error) {
      console.error(error);
      logout();
      return null;
    }
  };

  useQuery({
    queryKey: ['user'],
    queryFn: fetchUserDatabyToken,
  });

  const login = useCallback(async ({ email, password }: LoginRequest) => {
    const { data }: LoginResponse = await apiLogin.post('/api/login', {
      usuario: email,
      senha: password,
    });

    console.log('data', data);

    if (data.fields.acesso_permitido) {
      localStorage.setItem('token', data.fields.token);
    } else {
      console.log(data.fields.mensagem);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
