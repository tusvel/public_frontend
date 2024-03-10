import React, { memo } from 'react';
import cls from './NotificationButton.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.interface';
import NotificationsIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { classNames } from 'shared/lib/classNames/classNames';

type NotificationButtonProps = {
  className?: string;
};

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={classNames('', {}, [className])}
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <NotificationsIcon />
        </Button>
      }
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
