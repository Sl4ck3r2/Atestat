import { FC, memo, ReactNode, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import EmptyLayout from '../../layouts/Empty';
import LoginPage from '../../pages/login';

interface AuthenticatedGuardProps {
  children: ReactNode;
}

const AuthenticatedGuard: FC<AuthenticatedGuardProps> = ({ children }) => {
  // Instead of `true` that value could be replaced for some hook like
  // `useIsAuthenticated` from `@azure/msal-react`
  const isAuthenticated = true;

  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  if (!isAuthenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }

    return (
      <EmptyLayout>
        <LoginPage requestedLocation={requestedLocation} />
      </EmptyLayout>
    );
  }

  // This is done so that in case the route changes by any chance through other
  // means between the moment of request and the render we navigate to the initially
  // requested route.
  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

export default memo(AuthenticatedGuard);
