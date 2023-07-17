import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";

const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>TOGGLE THEME</button>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback={"...Loading"}>
				<Routes>
					<Route path="/" element={<MainPageAsync/>}/>
					<Route path="/about" element={<AboutPageAsync/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;