import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';

const Appointment = () => {
	const [ selectedDate, setSelectedDate ] = useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	return (
		<div>
			<Navbar />
			<AppointmentHeader handleDateChange={handleDateChange} />
			<BookAppoinment date={selectedDate} />
			<Footer />
		</div>
	);
};

export default Appointment;
