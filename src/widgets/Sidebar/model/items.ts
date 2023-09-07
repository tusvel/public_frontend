import type React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/links/main.svg';
import AboutIcon from 'shared/assets/icons/links/more.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  authOnly?: boolean;
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
    Icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'Статьи',
    authOnly: true,
  },
];
