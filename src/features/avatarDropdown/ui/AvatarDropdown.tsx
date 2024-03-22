import React, { memo, useCallback } from 'react';
import { Avatar } from '@/shared/ui/Avatar';
import { DropDown } from '@/shared/ui/Popups';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '@/shared/const/router';

type avatarDropdownProps = {
  className?: string;
};

export const AvatarDropdown = memo((props: avatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) return null;

  return (
    <DropDown
      className={className}
      direction={'bottom left'}
      trigger={<Avatar size={30} src={authData.avatar} />}
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: t('Админка'), href: RoutePath.admin_panel }]
          : []),
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id,
        },
        { content: t('Выйти'), onClick: onLogout },
      ]}
    />
  );
});
