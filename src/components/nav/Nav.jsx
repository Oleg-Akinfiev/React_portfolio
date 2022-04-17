import React, { useState } from "react";
import s from "./Nav.module.scss";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { IoIosContacts } from 'react-icons/io';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#')

	return (
		<nav>
			<a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? s.active : ''}><AiOutlineHome /></a>
			<a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? s.active : ''}><AiOutlineUser /></a>
			<a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? s.active : ''}><BiBook /></a>
			<a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? s.active : ''}><RiCustomerServiceFill /></a>
			<a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? s.active : ''}><IoIosContacts /></a>
		</nav>
	);
};

export default Nav;
