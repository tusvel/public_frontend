import { type HTMLAttributes, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline',
}

type CardProps = {
  className?: string;
  theme?: CardTheme;
  max?: boolean;
} & HTMLAttributes<HTMLDivElement> &
  PropsWithChildren;

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      className={classNames(cls.Card, { [cls.max]: max }, [
        className,
        cls[theme],
      ])}
    >
      {children}
    </div>
  );
};
