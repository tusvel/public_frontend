import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import LightTheme from 'shared/assets/icons/theme/light.svg';
import DarkTheme from 'shared/assets/icons/theme/dark.svg';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

export const ThemeSwitcher: FC = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<Button
			className={classNames(cls.ThemeSwitcher)}
			onClick={toggleTheme}
			theme={ButtonTheme.CLEAR}
		>
			<div style={{width: 30, height: 30}}>
				{theme === Theme.LIGHT ? <DarkTheme /> : <LightTheme />}
			</div>
		</Button>
	);
};
