// App.js
import React from 'react';
import BookAppointment from './Components/BookAppointment';
import RescheduleAppointment from './Components/RescheduleAppointment';

const App = () => {
    return (
        <div className="App">
            <h1>Appointment Booking System</h1>
            <BookAppointment />
            <hr />
            <RescheduleAppointment />
        </div>
    );
};

export default App;
