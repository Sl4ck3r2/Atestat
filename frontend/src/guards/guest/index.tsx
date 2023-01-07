import { Spin } from 'antd';
import { FC, memo, ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useUserProvider } from '../../context/User';
import EmptyLayout from '../../layouts/Empty';

interface GuestGuardProps {
  children: ReactNode;
}
const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { user, userLoading } = useUserProvider();
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  if (isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return <EmptyLayout>{!userLoading ? children : <Spin />}</EmptyLayout>;
};
export default memo(GuestGuard);
