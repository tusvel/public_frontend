import React, { type FC, type PropsWithChildren } from 'react';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { type ModalProps } from './Modal.interface';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

export const Modal: FC<ModalProps & PropsWithChildren> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { theme } = useTheme();
  const { isMounted, isClosing, close } = useModal({
    onClose,
    isOpen,
    animationDelay: 300,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
