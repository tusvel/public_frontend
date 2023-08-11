import { type FC, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type ButtonProps, ButtonSize } from './Button.interface';

export const Button: FC<ButtonProps & PropsWithChildren> = (props) => {
  const {
    className,
    children,
    theme,
    size = ButtonSize.M,
    square = false,
    disabled,
    ...otherProps
  } = props;

  const additional = [className, cls[theme], cls[size]];
  const mods = { [cls.square]: square, [cls.disabled]: disabled };

  return (
    <button
      disabled={disabled}
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
