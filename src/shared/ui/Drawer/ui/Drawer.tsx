import { memo, type ReactNode, useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import cls from './Drawer.module.scss';
import { Overlay } from '../../Overlay/Overlay';
import { Portal } from '../../Portal/Portal';
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider';

type DrawerProps = {
  className?: string;
  children?: ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

const HEIGHT = window.innerHeight - 100;

const DrawerContent = memo((props: DrawerProps) => {
  const { className, children, isOpen, onClose } = props;
  const { Spring, Gesture } = useAnimationLibs();
  const { theme } = useTheme();
  const [{ y }, api] = Spring.useSpring(() => ({ y: HEIGHT }));

  const openDrawer = useCallback(() => {
    api.start({
      y: 0,
      immediate: false,
    });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  const closeDrawer = (velocity = 0) => {
    api.start({
      y: HEIGHT,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > HEIGHT * 0.5 || (vy > 0.5 && dy > 0)) {
          closeDrawer();
        } else {
          openDrawer();
        }
      } else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < HEIGHT ? 'block' : 'none'));

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}
      >
        <Overlay onClick={closeDrawer} />
        <Spring.a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${HEIGHT - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return (
    <AnimationProvider>
      <DrawerContent {...props} />
    </AnimationProvider>
  );
};

const Drawer = (props: DrawerProps) => <DrawerAsync {...props} />;

export default Drawer;
