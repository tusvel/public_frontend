import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/Button.interface';

export const LoginForm: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <Input autofocus className={cls.input} placeholder="Введите username" />
      <Input className={cls.input} placeholder="Введите password" />
      <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
