import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type ArticleEditPageProps = {
  className?: string;
};

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <div className={classNames('', {}, [className])}>
      {isEdit
        ? t('Редактирование статьи с ID = ') + id
        : t('Создание новой статьи')}
    </div>
  );
});

export default ArticleEditPage;
