import { useEffect } from "react"

import { Navigation } from "./Layouts/Navigation";
// import { About } from "./pages/About";

import Aos from "aos"
import "aos/dist/aos.css"

export const App = () => {
	useEffect(() => {
		Aos.init({
			duration: 1800,
			offset: 100,
			disable: "mobile"
		});
	}, []);

	return (
		<div>
			<Navigation />
		</div>
	)
}