// Navbar Icons
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

// Hero SVG
import heroSVG from "./assets/hero.svg"

export const data = {
	navigation: [
		{
			name: "Home",
			link: "#Home",
			icon: TbSmartHome,
		},
		{
			name: "Skills",
			link: "#Skills",
			icon: BiUser,
		},
		{
			name: "Services",
			link: "#Services",
			icon: RiServiceLine,
		},
		{
			name: "Projects",
			link: "#Projects",
			icon: RiProjectorLine,
		},
		{
			name: "Contact",
			link: "#Contact",
			icon: MdOutlinePermContactCalendar,
		}
	],

	hero: {
		name: "Deus Gitonga",
		title: "Software Engineer",
		btnText: "Download CV",
		image: heroSVG
	}
}