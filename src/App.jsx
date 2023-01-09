import { useEffect } from "react"
import Navbar from "./layout/Navbar"

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
		</div>
	)
}

export default App;