import type GestureType from '@use-gesture/react';
import type SpringType from '@react-spring/web';
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type AnimationContextPayload = {
  Gesture?: typeof GestureType;
  Spring?: typeof SpringType;
  isLoaded?: boolean;
};

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncLibs = async () =>
  Promise.all([import('@use-gesture/react'), import('@react-spring/web')]);

export const useAnimationLibs = () =>
  useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider: FC<PropsWithChildren> = ({ children }) => {
  const Gesture = useRef<typeof GestureType>();
  const Spring = useRef<typeof SpringType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    void getAsyncLibs().then(([gesture, spring]) => {
      Gesture.current = gesture;
      Spring.current = spring;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({ isLoaded, Spring: Spring.current, Gesture: Gesture.current }),
    [isLoaded],
  );

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
