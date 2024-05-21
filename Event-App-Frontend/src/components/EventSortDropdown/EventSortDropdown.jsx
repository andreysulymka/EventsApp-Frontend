import React, { useState } from 'react';

    const EventSortDropdown = ({ onSortChange }) => {
    const handleChange = (e) => {
        const selectedSortBy = e.target.value;
        onSortChange(selectedSortBy);
    };

    return (
        <div>
            <label htmlFor="sortBy">Sort by:</label>
            <select id="sortBy" onChange={handleChange}>
                <option value="">Select...</option>
                <option value="title">Title</option>
                <option value="eventDate">Event Date</option>
                <option value="organizer">Organizer</option>
            </select>
        </div>
    );
};

export default EventSortDropdown;
