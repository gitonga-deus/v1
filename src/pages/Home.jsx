import { } from "react-bootstrap";
import hero from "../assets/hero/hero.svg"

const Home = () => {
	return (
		<section className="home_banner_area">
			<div className="banner_inner">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="banner_content">
								<h3 className="text-uppercase">Hell0</h3>
								<h1 className="text-uppercase">I am Deus Gitonga</h1>
								<h5 className="text-uppercase">Software Engineer</h5>
								<div className="d-flex align-items-center">
									<a className="primary_btn" href="#"><span>Hire Me</span></a>
									<a className="primary_btn tr-bg" href="#"><span>Get CV</span></a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="home_right_img">
								<img className="" src={hero} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home;