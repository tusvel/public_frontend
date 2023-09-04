import React, { memo } from 'react';
import cls from './SidebarItem.module.scss';
import { type SidebarItemType } from 'widgets/Sidebar/model/items';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink.interface';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';

type SidebarItemProps = {
  item: SidebarItemType;
  collapsed: boolean;
};

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.INVERTED_PRIMARY}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
