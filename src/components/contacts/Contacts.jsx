import React from "react";
import s from "./Contacts.module.scss";
import { AiOutlineMail } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { SiMessenger } from 'react-icons/si';

const Contacts = () => {
	return (
		<section id="contacts">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container">
				<div className={s.contact__container}>
					<div className={s.contact__options}>
						<article className={s.contact__option}>
							<AiOutlineMail className={s.contact__option__icon} />
							<h4>Email</h4>
							<h5>userpost@gmail.com</h5>
							<a href="https://gmail.com" target="_blank.">Send a message</a>
						</article>
						<article className={s.contact__option}>
							<BsMessenger className={s.contact__option__icon} />
							<h4>Messenger</h4>
							<h5>User Social</h5>
							<a href="https://vk.com" target="_blank.">Send a message</a>
						</article>
						<article className={s.contact__option}>
							<SiMessenger className={s.contact__option__icon} />
							<h4>Whats App</h4>
							<h5>+123456789</h5>
							<a href="https://web.whatsapp.com/send?phone+71234567890" target="_blank.">Send a message</a>
						</article>
					</div>

					<form action="">
						<input type="text" name="name" placeholder="Your Full Name" required />
						<input type="email" name="email" placeholder="Your Email" required />
						<textarea name="message" rows="7" placeholder="Your Message" required></textarea>
						<button type="submit" className="btn btn-primary">Send Message</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
