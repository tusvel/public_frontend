import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
  const { t } = useTranslation();
  return <div className={classNames('', {}, [])}>{t('Профиль')}</div>;
};
