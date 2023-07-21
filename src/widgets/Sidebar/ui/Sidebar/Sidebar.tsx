import React, {type FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {Button} from 'shared/ui/Button/Button';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';

type SidebarProps = {
	className?: string;
};

export const Sidebar: FC<SidebarProps> = props => {
	const {
		className,
	} = props;

	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
		>
			<Button onClick={toggleCollapsed}>
				TOGGLE
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher/>
			</div>
		</div>
	);
};
