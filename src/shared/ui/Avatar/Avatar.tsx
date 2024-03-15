import { type CSSProperties, type FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

type AvatarProps = {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
};

export const Avatar: FC<AvatarProps> = (props) => {
  const { className, src, alt, size } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};
