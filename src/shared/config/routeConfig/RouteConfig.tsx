import {type RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';

enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
}

const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: '/',
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: '/about',
		element: <AboutPage/>,
	},
};
