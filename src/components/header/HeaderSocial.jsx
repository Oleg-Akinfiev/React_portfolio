import React from "react";
import s from "./Header.module.scss";
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const HeaderSocial = () => {
	return (
		<div className={s.header__socials}>
			<a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
			<a href="https://github.com" target="_blank"><BsGithub /></a>
		</div>
	);
};

export default HeaderSocial;
