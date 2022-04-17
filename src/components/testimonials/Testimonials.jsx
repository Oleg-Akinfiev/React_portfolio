import React from "react";
import s from "./Testimonials.module.scss";
import AVT1 from "../../assets/AVT1.png"
import AVT2 from "../../assets/AVT2.png"
import AVT3 from "../../assets/AVT3.png"
import AVT4 from "../../assets/AVT4.png"

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
	{
		avatar: AVT1,
		name: "Tina Show",
		review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dicta laudantium porro, quia aliquid officiis nisi! Provident quia impedit odio."
	},
	{
		avatar: AVT2,
		name: "Shatta Wale",
		review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dicta laudantium porro, quia aliquid officiis nisi! Provident quia impedit odio."
	},
	{
		avatar: AVT3,
		name: "Kwame Despite",
		review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dicta laudantium porro, quia aliquid officiis nisi! Provident quia impedit odio."
	},
	{
		avatar: AVT4,
		name: "Nana Ame",
		review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dicta laudantium porro, quia aliquid officiis nisi! Provident quia impedit odio."
	},
]

const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<div className="container">
				<Swiper className={s.testimonials__container}
					modules={[Pagination]}
					spaceBetween={40}
					slidesPerView={1}
					pagination={{ clickable: true }}>
					{
						data.map(({avatar, name, review}, index) => {
							return (
								<SwiperSlide key={index} className={s.testimonials}>
									<div className={s.client__avatar}>
										<img src={avatar} alt="" />
									</div>
									<h5 className={s.client__name}>{name}</h5>
									<small className={s.client__review}>{review}</small>
								</SwiperSlide>
							)
						})
					}					
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
