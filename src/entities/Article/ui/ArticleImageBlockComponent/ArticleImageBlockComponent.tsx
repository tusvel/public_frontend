import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

type ArticleImageBlockComponentProps = {
  className?: string;
};

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (
  props,
) => {
  const { className } = props;

  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      // eslint-disable-next-line i18next/no-literal-string
    >
      ArticleImageBlockComponent
    </div>
  );
};
