// components/Notification.js
import React from 'react';

const Notification = ({ message }) => {
    return message ? (
        <div className="notification">
            {message}
        </div>
    ) : null;
};

export default Notification;
