import React from 'react';
import floride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import tooth from '../../../images/tooth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
	{
		name: 'Fluoride Treatment',
		img: floride
	},
	{
		name: 'Cavity Feeling',
		img: cavity
	},
	{
		name: 'Teeth Whitening',
		img: tooth
	}
];

const Services = () => {
	return (
		<section className="services-container mt-5">
			<div className="text-center">
				<h5 style={{ color: '#1CC7C1' }}>Our Services</h5>
				<h2>Services We Provider</h2>

				<div className="d-flex justify-content-center">
					<div className="w-75 row mt-5 pt-5">
						{serviceData.map((service) => <ServiceDetail service={service}> </ServiceDetail>)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
