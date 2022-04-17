import React from "react";
import s from "./Service.module.scss";
import { BiCheck } from "react-icons/bi";

const Service = () => {
	return (
		<section id="services">
			<h5>What I Offer</h5>
			<h2>Services</h2>

			<div className="container">
				<div className={s.service__container}>
					<article className={s.service}>
						<div className={s.service__head}>
							<h3>UI/UX Design</h3>
						</div>

						<ul className={s.service__list}>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
						</ul>
					</article>
					<article className={s.service}>
						<div className={s.service__head}>
							<h3>UI/UX Design</h3>
						</div>

						<ul className={s.service__list}>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
						</ul>
					</article>
					<article className={s.service}>
						<div className={s.service__head}>
							<h3>UI/UX Design</h3>
						</div>

						<ul className={s.service__list}>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
							<li>
								<BiCheck className={s.service__list__icon} />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</li>
						</ul>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Service;
