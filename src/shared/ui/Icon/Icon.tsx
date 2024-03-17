import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type IconProps = {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
} & React.SVGAttributes<SVGElement>;

export const Icon = memo((props: IconProps) => {
  const { className, Svg, ...otherProps } = props;

  return (
    <Svg className={classNames(cls.Icon, {}, [className])} {...otherProps} />
  );
});
