import { Nav, Button } from "react-bootstrap"
import { data } from "../utilities/data"


export const Navigation = () => {
	return (
		<Nav className="navbar navbar-expand-lg navbar-dark bg-color fixed-top px-4" id="sideNav">
			<a className="navbar-brand js-scroll-trigger" href="#page-top">
				<span className="d-block d-lg-none">Deus Gitonga</span>
				<span className="d-none d-lg-block">
					<img
						className="img-fluid img-thumbnail rounded-circle mx-auto mb-2"
						src={data.about.image} height="200px" width="200px" alt={data.about.name} />
				</span>
			</a>

			<Button
				className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</Button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#about">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
					</li>
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#education">Education</a>
					</li>
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
					</li>
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#interests">Contact Me</a>
					</li>
				</ul>
			</div>
		</Nav>
	);
}
