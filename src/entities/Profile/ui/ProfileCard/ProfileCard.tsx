import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.interface';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

type ProfileCardProps = {
  className?: string;
};

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.first}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
