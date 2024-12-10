import React from 'react';
import './App.css';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="app">
      <h1>From Design to Implementation</h1>
      <div className="sections-container">
        <MainSection 
          title="Main Section"
          button={['Schedule', 'Summary', 'Recent list']}
        />
        <MainSection 
          title="Component"
          button={['Child Component', 'Child Component', 'Child Component']}
        />
        <MainSection 
          title="<main-section>"
          button={['<schedule>', '<summary>', '<recent-list>']}
        />
      </div>
    </div>
  );
}

export default App;
