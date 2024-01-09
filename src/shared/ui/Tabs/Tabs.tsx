import { memo, type ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export type TabItem = {
  value: string;
  content: ReactNode;
};

type TabsProps = {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
};

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, value } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          onClick={clickHandle(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          key={tab.value}
          className={cls.tab}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
