import React, { memo, Suspense, useCallback, useState } from 'react';
import cls from './NotificationButton.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.interface';
import NotificationsIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { classNames } from 'shared/lib/classNames/classNames';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from 'shared/ui/Drawer';

type NotificationButtonProps = {
  className?: string;
};

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const onCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  const onOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <NotificationsIcon />
    </Button>
  );

  return (
    <div>
      <Suspense fallback={'...'}>
        <BrowserView>
          <Popover
            className={classNames('', {}, [className])}
            trigger={trigger}
          >
            <NotificationList className={cls.notifications} />
          </Popover>
        </BrowserView>
        <MobileView>
          {trigger}
          <Drawer onClose={onCloseDrawer} isOpen={isOpenDrawer}>
            <NotificationList />
          </Drawer>
        </MobileView>
      </Suspense>
    </div>
  );
});
