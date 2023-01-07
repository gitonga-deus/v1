import { Container, Nav, Button } from "react-bootstrap"

export const Navigation = () => {
	return (
		<header className="header-area">
			<div className="main-menu">
				<Nav className="navbar navbar-expand-lg navbar-light">
					<Container>
						<a href="/" className="navbar-brand">
							<h2 className="logo-h">Deus Gitonga</h2>
						</a>
						<Button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</Button>
						<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul className="nav navbar-nav menu-nav justify-content-end">
								<li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
								<li className="nav-item"><a className="nav-link" href="#">About</a></li>
								<li className="nav-item"><a className="nav-link" href="#">Services</a></li>
								<li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
							</ul>
						</div>
					</Container>
				</Nav>
			</div>
		</header>
	)
}