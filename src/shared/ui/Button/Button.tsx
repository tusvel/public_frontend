import {type ButtonHTMLAttributes, type FC, type PropsWithChildren} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
}

type ButtonProps = {
	className?: string;
	theme?: ButtonTheme;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps & PropsWithChildren> = props => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
