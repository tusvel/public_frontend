import { type FC, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';

type AppLinkProps = {
  className?: string;
  theme?: AppLinkTheme;
} & LinkProps;

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INVERTED_PRIMARY = 'invertedPrimary',
  INVERTED_SECONDARY = 'invertedSecondary',
}

export const AppLink: FC<AppLinkProps & PropsWithChildren> = (props) => {
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
};
