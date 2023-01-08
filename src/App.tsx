import { Navigation } from "./Layouts/Navigation";

import { Home } from "./pages/Home";
// import { About } from "./pages/About";

export const App = () => {
	return (
		<div>
			<Navigation />
			<Home />
		</div>
	)
}