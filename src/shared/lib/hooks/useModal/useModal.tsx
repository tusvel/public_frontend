import {
  type KeyboardEvent,
  type MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type useModalProps = {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay?: number;
};

/**
 * Переиспользуемый хук для модальных компонентов (drawer/modal)
 * @param animationDelay
 * @param isOpen
 * @param onClose
 */
export const useModal = ({
  onClose,
  isOpen,
  animationDelay,
}: useModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close],
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

  return {
    isClosing,
    close,
    isMounted,
  };
};
