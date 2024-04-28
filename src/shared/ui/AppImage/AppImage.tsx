import React, {
  type ImgHTMLAttributes,
  memo,
  type ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

type AppImageProps = {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
} & ImgHTMLAttributes<HTMLImageElement>;

export const AppImage = memo((props: AppImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img className={className} src={src} {...otherProps} alt={alt} />;
});
