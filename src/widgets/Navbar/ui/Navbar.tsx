import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
	const {
		className
	} = props

	return (
		<div
			className={classNames(cls.Navbar, {}, [className])}
		>
			<ThemeSwitcher />
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.INVERTED_PRIMARY} className={cls.mainLink} to={'/'}>Main</AppLink>
				<AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to={'/about'}>About</AppLink>
			</div>
		</div>
	)
};
