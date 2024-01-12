import { type PropsWithChildren } from 'react';
import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps & PropsWithChildren) => {
  const { align = 'start' } = props;

  return <Flex align={align} direction="column" {...props} />;
};
