import React, { useState } from 'react';

const ParticipantSearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('name');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchByChange = (e) => {
        setSearchBy(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm, searchBy);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search"
            />
            <select value={searchBy} onChange={handleSearchByChange}>
                <option value="name">Name</option>
                <option value="email">Email</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default ParticipantSearchForm;
