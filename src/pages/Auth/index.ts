import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { setToken } from '@/services/auth';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('tk');

    if (token) {
      setToken(token);
    }

    navigate('/'); // redireciona para a home
  }, [searchParams, navigate]);

  return null;
}
