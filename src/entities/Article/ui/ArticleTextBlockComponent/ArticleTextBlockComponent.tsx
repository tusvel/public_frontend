import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

type ArticleTextBlockComponentProps = {
  className?: string;
};

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (
  props,
) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      ArticleTextBlockComponent
    </div>
  );
};
