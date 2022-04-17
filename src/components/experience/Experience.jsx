import React from "react";
import s from "./Experience.module.scss";
import { AiFillCheckCircle } from "react-icons/ai";

const Experience = () => {
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className="container">
				<div className={s.experience__container}>
					<div className={s.experience__frontend}>
						<h3>Frontend Developer</h3>
						<div className={s.experience__content}>
							<article className={s.experience__details}>
								<AiFillCheckCircle className={s.experience__details__icon}/>
								<div>
									<h4>HTML</h4>
									<small className="text-light">Experienced</small>
								</div>
							</article>
							<article className={s.experience__details}>
								<AiFillCheckCircle className={s.experience__details__icon}/>
								<div>
									<h4>CSS</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>
							<article className={s.experience__details}>
								<AiFillCheckCircle className={s.experience__details__icon}/>
								<div>
									<h4>JavaScript</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>
							<article className={s.experience__details}>
								<AiFillCheckCircle className={s.experience__details__icon}/>
								<div>
									<h4>Bootstrap</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>
							<article className={s.experience__details}>
								<AiFillCheckCircle className={s.experience__details__icon}/>
								<div>
									<h4>React</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>
						</div>
					</div>
					<div className={s.experience__backend}>
						<h3>Backend Developer</h3>
						<div className={s.experience__content}>
							<article className={s.experience__details}>
								<AiFillCheckCircle className={s.experience__details__icon}/>
								<div>
									<h4>Node JS</h4>
									<small className="text-light">Experienced</small>
								</div>
							</article>
							<article className={s.experience__details}>
								<AiFillCheckCircle className={s.experience__details__icon}/>
								<div>
									<h4>PHP</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>
							<article className={s.experience__details}>
								<AiFillCheckCircle className={s.experience__details__icon}/>
								<div>
									<h4>MySQL</h4>
									<small className="text-light">Basic</small>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
