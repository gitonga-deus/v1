import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

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
	]
}