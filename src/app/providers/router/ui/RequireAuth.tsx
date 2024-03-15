import { type FC, type PropsWithChildren, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { type UserRole } from '@/entities/User';
import { getUserRole } from '@/entities/User/model/selectors/getUserRole';

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
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
};
