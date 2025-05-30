// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Main from '@pages/Main';
import Login from '@pages/Login';
import Auth from '@pages/Auth';
// import { useAuth } from '@src/auth/useAuth';

export function AppRoutes() {
  // const { login } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pvrc" element={<Auth />} />
    </Routes>
  );
}
