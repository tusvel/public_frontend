import { memo, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Drawer.module.scss';
import { Overlay } from '../../Overlay/Overlay';

type DrawerProps = {
  className?: string;
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, onClose } = props;
  const { theme } = useTheme();

  return (
    <div
      className={classNames(cls.Drawer, { [cls.opened]: isOpen }, [
        className,
        theme,
        'app_drawer',
      ])}
    >
      <Overlay onClick={onClose} />
      <div className={cls.content}>{children}</div>
    </div>
  );
});

export default Drawer;
