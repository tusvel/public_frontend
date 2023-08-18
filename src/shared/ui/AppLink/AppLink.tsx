import { memo, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link } from 'react-router-dom';
import { type AppLinkProps, AppLinkTheme } from './AppLink.interface';

export const AppLink = memo((props: AppLinkProps & PropsWithChildren) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames('', {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
