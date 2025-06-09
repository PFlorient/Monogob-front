// src/components/errors/RouteErrorHandler.tsx
import { useContext, useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router';
import { LayoutContext } from '../layout/layout';

export default function RouteErrorHandler() {
  const error = useRouteError() as { message?: string; status?: number };
  const navigate = useNavigate();
  const { openErrorApiModal } = useContext(LayoutContext);

  useEffect(() => {
    if (error?.message) {
      openErrorApiModal(error.message);
    }
    if (error?.status === 401) {
      navigate('/');
    }
  }, [error, navigate, openErrorApiModal]);

  return null;
}
