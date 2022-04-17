import React from "react";
import s from "./Portfolio.module.scss";
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.png"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.png"

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Charts templates and infographics in Figma",
		github: "https://github.com",
		demo: "https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma"
	},
	{
		id: 2,
		image: IMG2,
		title: "Charts templates & infographics in Figma",
		github: "https://github.com",
		demo: "https://dribbble.com/shots/17428242-Orion-UI-kit-Charts-templates-infographics-in-Figma"
	},
	{
		id: 3,
		image: IMG3,
		title: "Charts templates & infographics in Figma",
		github: "https://github.com",
		demo: "https://dribbble.com/shots/11079460-Orion-UI-kit-Charts-templates-infographics-in-Figma"
	},
	{
		id: 4,
		image: IMG4,
		title: "Figma dashboard UI kit for data design web apps",
		github: "https://github.com",
		demo: "https://dribbble.com/shots/17845658-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
	},
	{
		id: 5,
		image: IMG5,
		title: "Figma dashboard UI kit for data design web apps",
		github: "https://github.com",
		demo: "https://dribbble.com/shots/17661056-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
	},
	{
		id: 6,
		image: IMG6,
		title: "Figma dashboard UI kit for data design web apps",
		github: "https://github.com",
		demo: "https://dribbble.com/shots/17428209-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
	},
]

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container">
				<div className={s.container__portfolio}>
					{
						data.map(({id, image, title, github, demo}) => {
							return (
								<article key={id} className={s.portfolio__item}>
									<div className={s.portfolio__item__img}>
										<img src={image} alt={title} />
									</div>
									<h3>This is a portfolio item title</h3>
									<div className={s.portfolio__item__cta}>
										<a href={github} className="btn" target='_blank.'>GitHub</a>
										<a href={demo} className="btn btn-primary" target='_blank.'>Live Demo</a>							
									</div>
								</article>
							)
						})
					}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
