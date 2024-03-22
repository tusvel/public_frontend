import React, { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/authByUsername';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '../../../entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { RoutePath } from '@/shared/const/router';

type NavbarProps = {
  className?: string;
};

export const Navbar = memo((props: NavbarProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          theme={TextTheme.INVERTED}
          className={cls.appName}
          title={t('Ulbi TV App')}
        />
        <AppLink
          theme={AppLinkTheme.INVERTED_PRIMARY}
          to={RoutePath.article_create}
          className={cls.createLink}
        >
          {t('Создать статью')}
        </AppLink>
        <div className={cls.links}>
          <HStack gap={'16'}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
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
