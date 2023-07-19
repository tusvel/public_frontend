import {FC, PropsWithChildren} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme
}

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	INVERTED_PRIMARY = 'invertedPrimary',
	INVERTED_SECONDARY = 'invertedSecondary'
}

export const AppLink: FC<AppLinkProps & PropsWithChildren> = (props) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props

	return (
		<Link
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			to={to}
			{...otherProps}
		>
			{children}
		</Link>
	)
};
