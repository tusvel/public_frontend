import React, {Suspense} from 'react';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const App = () => {
	return (
		<div className="app">
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