import type { DirectionType } from 'shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionClasses: Record<DirectionType, string> = {
  'top left': cls.topLeft,
  'top right': cls.topRight,
  'bottom left': cls.bottomLeft,
  'bottom right': cls.bottomRight,
};
