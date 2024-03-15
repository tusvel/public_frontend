import { type CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

type SkeletonProps = {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
};

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, width, height, border } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
  );
});
