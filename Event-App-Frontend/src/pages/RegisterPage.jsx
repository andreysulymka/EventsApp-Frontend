import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';

function RegisterPage() {
    const { eventId } = useParams();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        birthDay: '',
        foundThrow: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `https://eventsappbackend-e2010285d16e.herokuapp.com/${eventId}/register`,
                formData
            );

            console.log('Registration successful', response.data);
        } catch (error) {
            console.error('Error during registration', error);
        }
    };

    return (
        <div className="container">
            <h1 className="event-title">Event Registration</h1>
            <form onSubmit={handleSubmit} className="event-form">
                <div>
                    <label className="event-subtitle">Full Name</label>
                    <br />
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="event-subtitle">Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="event-subtitle">Date of birth</label>
                    <br />
                    <input
                        type="date"
                        name="birthDay"
                        value={formData.birthDay}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label className="event-subtitle">
                    Where did you hear about this event?
                </label>
                <br />
                <div className="events-rediobutton">
                    <label>
                        <input
                            type="radio"
                            name="foundThrow"
                            value="Social Media"
                            checked={formData.foundThrow === 'Social Media'}
                            onChange={handleChange}
                        />
                        Social Media
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="foundThrow"
                            value="Friends"
                            checked={formData.foundThrow === 'Friends'}
                            onChange={handleChange}
                        />
                        Friends
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="foundThrow"
                            value="Found Myself"
                            checked={formData.foundThrow === 'Found Myself'}
                            onChange={handleChange}
                        />
                        Found Myself
                    </label>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
