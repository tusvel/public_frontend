import {
  type ButtonHTMLAttributes,
  type FC,
  type PropsWithChildren,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

type ButtonProps = {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export const Button: FC<ButtonProps & PropsWithChildren> = (props) => {
  const {
    className,
    children,
    theme,
    size = ButtonSize.M,
    square = false,
    ...otherProps
  } = props;

  const additional = [className, cls[theme], cls[size]];
  const mods = { [cls.square]: square };

  return (
    <button
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
