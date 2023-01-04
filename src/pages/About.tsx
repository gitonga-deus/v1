import { data } from "../utilities/data";

export const About = () => {
	return (
		<section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
			<div className="my-auto">
				<h1 className="mb-0">
					{data.about.name}
				</h1>
				<div className="subheading mb-5">
					{data.about.locationAt} · {data.about.phoneNumber} ·
				</div>
				<p className="mb-5">

				</p>
			</div>
		</section>
	)
}