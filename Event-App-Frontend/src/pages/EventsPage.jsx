import React, { useState, useEffect } from 'react';
import axios from 'axios';

import EventCard from '../components/EventCard/EventCard.jsx';
import './EventsPage.css';
import EventSortDropdown from '../components/EventSortDropdown/EventSortDropdown.jsx';

function EventsPage() {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage, setEventsPerPage] = useState(12);
    const [sortBy, setSortBy] = useState('');

    const fetchEvents = async () => {
        try {
            let url;
            if (sortBy === '') {
                url = 'http://localhost:4444/';
            } else {
                url = `http://localhost:4444/events/sort/${sortBy}`;
            }
            const response = await axios.get(url);
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [sortBy]);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="events-container">
            <h1>Events Board</h1>
            <EventSortDropdown onSortChange={setSortBy} />
            <ul className="grid-container">
                {currentEvents.map((event) => (
                    <EventCard key={event._id} event={event} />
                ))}
            </ul>
            <div className="pagination">
                {Array.from(
                    { length: Math.ceil(events.length / eventsPerPage) },
                    (_, i) => (
                        <button key={i + 1} onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}

export default EventsPage;
