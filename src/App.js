import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";

const App = () => {
	return (
		<div>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Service />
			<Portfolio />
			<Testimonials />
			<Contacts />
			<Footer />
		</div>
	);
};

export default App;
