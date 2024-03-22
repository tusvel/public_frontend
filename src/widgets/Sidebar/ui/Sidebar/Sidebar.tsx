import React, { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button } from '@/shared/ui/Button';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ButtonTheme } from '@/shared/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';

type SidebarProps = {
  className?: string;
};

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const sidebarItemsList = useSelector(getSidebarItems);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  const sidebarItems = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} key={item.path} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemsList],
  );

  return (
    <aside
      data-testid={'sidebar'}
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid={'sidebar-toggle'}
        onClick={toggleCollapsed}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.sidebarToggle}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack role={'navigation'} gap="16" className={cls.items}>
        {sidebarItems}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.langSwitcher} />
      </div>
    </aside>
  );
});
