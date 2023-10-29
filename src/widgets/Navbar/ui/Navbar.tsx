import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.interface';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from '../../../entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { userActions } from '../../../entities/User';

type NavbarProps = {
  className?: string;
};

export const Navbar = memo((props: NavbarProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
            {t('Выйти')}
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          {t('Войти')}
        </Button>
      </div>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
