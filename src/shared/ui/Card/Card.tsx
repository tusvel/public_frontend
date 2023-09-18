import { type HTMLAttributes, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

type CardProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement> &
  PropsWithChildren;

export const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div {...otherProps} className={classNames(cls.Card, {}, [className])}>
      {children}
    </div>
  );
};
