import React from 'react';
import { Link } from 'react-router-dom';

import './EventCard.css'

function EventCard({ event }) {
    return (
        <div className="event-card">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.eventDate}</p>
            <p>{event.organizer}</p>
            <div className="event-card-actions">
                <Link to={`/${event._id}/register`}>Register</Link>
                <Link to={`/${event._id}/participants`}>View Participants</Link>
            </div>
        </div>
    );
}

export default EventCard;
  
