import { Menu } from '@headlessui/react';
import cls from './DropDown.module.scss';
import { Fragment, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { type DirectionType } from 'shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClasses } from '../../styles/const';

export type DropDownItem = {
  content: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
};

type DropDownType = {
  className?: string;
  trigger: ReactNode;
  items: DropDownItem[];
  direction?: DirectionType;
};

export function DropDown(props: DropDownType) {
  const { className, trigger, items, direction = 'bottom right' } = props;

  const menuClasses = mapDirectionClasses[direction];

  return (
    <Menu as={'div'} className={classNames(popupCls.popup, {}, [className])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [menuClasses])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              className={classNames(
                cls.item,
                { [popupCls.active]: active },
                [],
              )}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item key={item.href} as={AppLink} to={item.href}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={index} as={Fragment}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
