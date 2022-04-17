import React from "react";
import s from "./About.module.scss";
import Me from "./../../assets/About_me.jpg";
import { FaAward, FaRegFolderOpen } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container">
				<div className={s.about__container}>
					<div className={s.about__me}>
						<div className={s.about__me__image}>
							<img src={Me} alt="About image" />
						</div>
					</div>

					<div className={s.about__content}>
						<div className={s.about__cards}>
							<article className={s.about__card}>
								<FaAward className={s.about__icon} />
								<h5>Experience</h5>
								<small>3+ Years Working</small>
							</article>
							<article className={s.about__card}>
								<FiUsers className={s.about__icon} />
								<h5>Clients</h5>
								<small>200+ Worldwide</small>
							</article>
							<article className={s.about__card}>
								<FaRegFolderOpen className={s.about__icon} />
								<h5>Projects</h5>
								<small>80+ Completed</small>
							</article>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quisquam expedita necessitatibus perferendis libero, provident sit ea quia, enim asperiores incidunt animi officiis tempore magnam tempora molestiae delectus esse eaque.
						</p>
						<a href="#contact" className="btn btn-primary">Let's Talk</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
