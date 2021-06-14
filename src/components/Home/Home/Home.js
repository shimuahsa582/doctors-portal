import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeturedServices from '../FeturedServices/FeturedServices';
import Header from '../Header/Header';
import MakeAppiontment from '../MakeAppiontment/MakeAppiontment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
	return (
		<div>
			<Header />
			<Services />
			<FeturedServices />
			<MakeAppiontment />
			<Testimonials />
			<Blogs />
			<Doctors />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
