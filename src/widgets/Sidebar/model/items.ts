import type React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/links/main.svg';
import AboutIcon from 'shared/assets/icons/links/more.svg';

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
};

export const SidebarItemsList = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Главная страница',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    Icon: AboutIcon,
    text: 'Профиль',
  },
];
