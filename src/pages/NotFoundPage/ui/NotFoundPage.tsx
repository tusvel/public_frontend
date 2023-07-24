import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import {useTranslation} from 'react-i18next';

const NotFoundPage: FC = () => {
  const {t} = useTranslation();

  return (
    <div
      className={classNames(cls.NotFoundPage, {}, [])}
    >
      {t('Страница не найдена')}
    </div>
  );
};

export default NotFoundPage;
