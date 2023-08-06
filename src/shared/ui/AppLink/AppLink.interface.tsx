import { type LinkProps } from 'react-router-dom';

export type AppLinkProps = {
  className?: string;
  theme?: AppLinkTheme;
} & LinkProps;

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INVERTED_PRIMARY = 'invertedPrimary',
  INVERTED_SECONDARY = 'invertedSecondary',
}
