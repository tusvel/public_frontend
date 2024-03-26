import { type FC, type PropsWithChildren, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRole, type UserRole } from '@/entities/User';
import { Navigate, useLocation } from 'react-router-dom';

import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

type RequireAuthProps = {
  roles?: UserRole[];
};

export const RequireAuth: FC<PropsWithChildren & RequireAuthProps> = ({
  children,
  roles,
}) => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRole = useSelector(getUserRole);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) return true;

    return roles.some((role) => userRole?.includes(role));
  }, [roles, userRole]);

  if (!isAuth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
    );
  }

  return children;
};
