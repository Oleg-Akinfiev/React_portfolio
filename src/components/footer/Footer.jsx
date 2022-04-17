import React from "react";
import s from "./Footer.module.scss";
import {AiFillFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
	return (
		<footer>
			<a href="#" className={s.footer__logo}>User Name</a>

			<ul className={s.permalink}>
				<li><a href="#">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#service">Service</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>

			<div className={s.footer__socials}>
				<a href="https://facebook.com"><AiFillFacebook /></a>
				<a href="https://twitter.com"><AiFillTwitterCircle /></a>
				<a href="https://instagram.com"><BsInstagram /></a>
			</div>
		</footer>
	);
};

export default Footer;
