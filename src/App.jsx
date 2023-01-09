import { useEffect } from "react"

// Layout - Navbar
import Navbar from "./layout/Navbar"

// Components
import Hero from "./components/Hero"

import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {

	useEffect(() => {
		Aos.init({
			duration: 1800,
			offset: 100,
			disable: "mobile",
		})
	}, []);

	return (
		<div>
			<Navbar />
			<Hero />
		</div>
	)
}

export default App;