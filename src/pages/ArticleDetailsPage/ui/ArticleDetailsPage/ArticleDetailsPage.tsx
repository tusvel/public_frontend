import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

type ArticleDetailsPageProps = {
  className?: string;
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      Article Details Page
    </div>
  );
};

export default memo(ArticleDetailsPage);
