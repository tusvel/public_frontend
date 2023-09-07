import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

type ArticlesPageProps = {
  className?: string;
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      Articles Page
    </div>
  );
};

export default memo(ArticlesPage);
