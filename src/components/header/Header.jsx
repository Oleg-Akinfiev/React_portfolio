import React from "react";
import CTA from "./CTA";
import s from "./Header.module.scss";
import Avatar from './../../assets/Avatar.png';
import HeaderSocial from "./HeaderSocial";

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.header__container}>
					<h5>Hello I'm</h5>
					<h1>User Name</h1>
					<h5 className="text-light">Frontend Developer</h5>
					<CTA />
					<HeaderSocial />

					<div className={s.me}>
						<img src={Avatar} alt="" />
					</div>

					<a href="#contact" className={s.scroll__down}>Scroll Down</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
