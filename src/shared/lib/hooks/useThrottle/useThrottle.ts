import { useCallback, useRef } from 'react';

export function useThrottle(cb: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        cb(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [cb, delay],
  );
}
