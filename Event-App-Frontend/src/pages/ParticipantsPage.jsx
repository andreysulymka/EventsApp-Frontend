import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ParticipantPage.css';

const ParticipantsPage = () => {
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { eventId } = useParams();

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:4444/${eventId}/participants`
                );
                setParticipants(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchParticipants();
    }, [eventId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="participants-container">
            <h1>Participants</h1>
            {participants.length > 0 ? (
                <ul className="participants-grid">
                    {participants.map((participant) => (
                        <li className="participant-card" key={participant._id}>
                            {participant.fullName}
                            <br />
                            {participant.email}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No participants found</div>
            )}
        </div>
    );
};

export default ParticipantsPage;
