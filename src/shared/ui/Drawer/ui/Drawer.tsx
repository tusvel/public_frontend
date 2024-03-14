import { memo, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Drawer.module.scss';
import { Overlay } from '../../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

type DrawerProps = {
  className?: string;
  children: ReactNode;
  onClose: () => void;
  lazy?: boolean;
  isOpen: boolean;
};

const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { theme } = useTheme();
  const { isMounted, isClosing, close } = useModal({
    onClose,
    isOpen,
    animationDelay: 300,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <div
      className={classNames(
        cls.Drawer,
        { [cls.opened]: isOpen, [cls.isClosing]: isClosing },
        [className, theme, 'app_drawer'],
      )}
    >
      <Overlay onClick={close} />
      <div className={cls.content}>{children}</div>
    </div>
  );
});

export default Drawer;
