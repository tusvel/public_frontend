import { createRoot } from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

const root = createRoot(document.getElementById('app'));
root.render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>
);