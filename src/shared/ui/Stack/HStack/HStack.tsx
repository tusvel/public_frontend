import { type PropsWithChildren } from 'react';
import { Flex, type FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps & PropsWithChildren) => (
  <Flex direction="row" {...props} />
);
