import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faClock, faMapMarker, faPhone } from ' @fortawesome/free-brands-svg-icons';

const infosData = [
	{
		title: 'Opening Hours',
		description: 'we are open 7 days',
		icon: faClock,
		background: 'primary'
	},
	{
		title: 'Visit Our Location',
		description: 'Brooklyn NY 10003 USA',
		icon: faMapMarker,
		background: 'dark'
	},
	{
		title: 'Call Us Now',
		description: '+124536789',
		icon: faPhone,
		background: 'last'
	}
];
const BuisnessInfo = () => {
	return (
		<section className="d-flex justify-content-center">
			<div className="w-75 row">{infosData.map((info) => <InfoCard info={info}> </InfoCard>)}</div>
		</section>
	);
};

export default BuisnessInfo;
