import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import EventsPage from './pages/EventsPage';
import RegisterPage from './pages/RegisterPage';
import ParticipantsPage from './pages/ParticipantsPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EventsPage />} />
                <Route path="/:eventId/register" element={<RegisterPage />} />
                <Route
                    path="/:eventId/participants"
                    element={<ParticipantsPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
