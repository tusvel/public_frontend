import { type FC, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  elem?: Element;
};

export const Portal: FC<PortalProps & PropsWithChildren> = (props) => {
  const { children, elem = document.body } = props;

  return createPortal(children, elem);
};
