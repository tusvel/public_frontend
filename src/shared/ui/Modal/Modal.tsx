import React, {
  type FC,
  type KeyboardEvent,
  type MutableRefObject,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { type ModalProps } from './Modal.interface';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps & PropsWithChildren> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown as () => void);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown as () => void);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
