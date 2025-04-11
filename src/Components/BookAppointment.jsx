// components/BookAppointment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingAppointmentImage from './BookingAppointmentImage.jpg';

const BookAppointment = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [appointmentTime, setAppointmentTime] = useState('');
    const [patientId, setPatientId] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch available doctors
        axios.get('http://localhost:9000/api/doctors')
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the doctors!', error);
            });
    }, []);

    const bookAppointment = () => {
        axios.post('http://localhost:9000/api/appointments/book', {
            patientId: patientId,
            doctorId: selectedDoctor,
            appointmentTime: appointmentTime
        })
        .then(response => {
            setMessage('Appointment successfully booked.');
        })
        .catch(error => {
            setMessage('Failed to book the appointment.');
        });
    };

    return (
        <div>
            <h2>Book Appointment</h2>

            <label>Patient ID:</label>
            <input type="text" value={patientId} onChange={e => setPatientId(e.target.value)}  />
            <br></br>

            <label>Choose Doctor:</label>
            <select onChange={e => setSelectedDoctor(e.target.value)}>
                <option value="">--Select a Doctor--</option>
                {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>
                        {doctor.name} - {doctor.specialty}
                    </option>
                ))}
            </select>
            <br></br>

            <label>Appointment Time:</label>
            <input 
                type="datetime-local" 
                value={appointmentTime} 
                onChange={e => setAppointmentTime(e.target.value)} 
            />
             <br></br>

            <button onClick={bookAppointment}>
            <img src={BookingAppointmentImage} alt="Book" /> BookAppointment</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookAppointment;
