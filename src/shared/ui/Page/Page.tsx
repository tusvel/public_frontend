import {
  type FC,
  type MutableRefObject,
  type PropsWithChildren,
  useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

type PageProps = {
  className?: string;
  onScrollEnd?: () => void;
};

export const Page: FC<PropsWithChildren & PageProps> = (props) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
