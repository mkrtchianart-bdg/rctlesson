import React from 'react';
import { CounterButton } from '../components/counter';
import './TodayPage.css'; // Import the CSS file

function TodayPage() {
    return (
        <div className="center-wrapper">
            <CounterButton className="big-button" />
        </div>
    );
}

export default TodayPage;