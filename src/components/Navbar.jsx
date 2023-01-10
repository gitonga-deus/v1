import { Container, Button } from "react-bootstrap";

const Navbar = () => {
	return (
		<header className="header_area">
			<div className="main_menu">
				<nav className="navbar navbar-expand-lg navbar-light">
					<Container>
						<a className="navbar-brand logo_h text-uppercase" href="index.html">
							<h4>Gitonga</h4>
						</a>

						<Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</Button>

						<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul className="nav navbar-nav menu_nav justify-content-end">
								<li className="nav-item active"><a className="nav-link" href="#home">Home</a></li>
								<li className="nav-item"><a className="nav-link" href="#about">About</a></li>
								<li className="nav-item"><a className="nav-link" href="#service">Services</a></li>
								<li className="nav-item"><a className="nav-link" href="#portofolio">Portfolio</a></li>
							</ul>
						</div>
					</Container>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;