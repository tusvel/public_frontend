import { Popover as PopoverComponent } from '@headlessui/react';
import type { ReactNode } from 'react';
import type { DirectionType } from '@/shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';
import { mapDirectionClasses } from '../../styles/const';
import { classNames } from '@/shared/lib/classNames/classNames';

type PopoverProps = {
  className?: string;
  trigger: ReactNode;
  direction?: DirectionType;
  children: ReactNode;
};

const Popover = (props: PopoverProps) => {
  const { className, trigger, direction = 'bottom left', children } = props;

  const classesOptions = [mapDirectionClasses[direction]];

  return (
    <PopoverComponent
      className={classNames(cls.popover, {}, [className, popupCls.popup])}
    >
      <PopoverComponent.Button className={popupCls.trigger}>
        {trigger}
      </PopoverComponent.Button>

      <PopoverComponent.Panel
        className={classNames(cls.panel, {}, classesOptions)}
      >
        {children}
      </PopoverComponent.Panel>
    </PopoverComponent>
  );
};

export default Popover;
