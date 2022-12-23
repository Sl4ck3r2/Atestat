import { FC, memo, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return <>{children}</>;
};

export default memo(GuestGuard);
