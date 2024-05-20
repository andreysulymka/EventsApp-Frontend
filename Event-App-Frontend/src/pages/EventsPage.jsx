import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import EventCard from '../components/EventCard';
import './EventsPage.css';

function EventsPage() {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(12);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await axios.get('http://localhost:4444/');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events', error);
            }
        }

        fetchEvents();
    }, []);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="events-container">
            <h1>Events Board</h1>
            <ul className="grid-container">
                {currentEvents.map((event) => (
                    <EventCard key={event._id} event={event} />
                ))}
            </ul>
            <div className="pagination">
                <button onClick={() => paginate(1)}>1</button>
                <button onClick={() => paginate(2)}>2</button>
                <button onClick={() => paginate(3)}>3</button>
                {/* Додайте більше кнопок за необхідністю */}
            </div>
        </div>
    );
}

export default EventsPage;
