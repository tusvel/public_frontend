import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

type ArticleCodeBlockComponentProps = {
  className?: string;
};

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
  props,
) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      ArticleCodeBlockComponent
    </div>
  );
};
