import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LITE

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const defaultProps: ThemeContextProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;