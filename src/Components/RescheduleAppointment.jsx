// components/RescheduleAppointment.js
import React, { useState } from 'react';
import axios from 'axios';
import Reschedulebooking from './Reschedulebooking.jpg';

const RescheduleAppointment = () => {
    const [appointmentId, setAppointmentId] = useState('');
    const [newAppointmentTime, setNewAppointmentTime] = useState('');
    const [message, setMessage] = useState('');

    const rescheduleAppointment = () => {
        axios.put(`http://localhost:9000/api/appointments/reschedule/${appointmentId}?newAppointmentTime=${newAppointmentTime}`)
        .then(response => {
            setMessage('Appointment successfully rescheduled.');
        })
        .catch(error => {
            setMessage('Failed to reschedule the appointment.');
        });
    };

    return (
        <div>
            <h2>Reschedule Appointment</h2>

            <label>Appointment ID:</label>
            <input 
                type="text" 
                value={appointmentId} 
                onChange={e => setAppointmentId(e.target.value)} 
            />
             <br></br>

            <label>New Appointment Time:</label>
            <input 
                type="datetime-local" 
                value={newAppointmentTime} 
                onChange={e => setNewAppointmentTime(e.target.value)} 
            />
             <br></br>

            <button onClick={rescheduleAppointment}>
            <img src={Reschedulebooking} alt="Book" /> Reschedule Appointment</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RescheduleAppointment;
