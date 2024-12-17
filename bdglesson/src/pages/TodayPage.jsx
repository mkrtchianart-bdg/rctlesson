import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import './TodoPage.css';

function TodayPage() {
  const navigate = useNavigate();

  return (
    <div className="todo-page">
      <div className="back-button-container">
        <Button text="Back to Home" onClick={() => navigate("/")} />
      </div>

      </div>
  );
}

export default TodayPage; 