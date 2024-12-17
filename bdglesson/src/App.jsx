import React from "react";
import "./App.css";
import MainSection from "./components/MainSection";
import { data } from "./consts/dataArray";
import List from "./components/list";
import { names } from "./consts/listArray";
import Button from "./components/Button";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import TodayPage from "./pages/TodayPage";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <h1>From Design to Implementation</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <Button text="Show Todo List" onClick={() => navigate("/todo")} />
        <Button text="Today's Project" onClick={() => navigate("/today")} />
      </div>
      <div className="sections-container">
        {data.map((section, index) => {
          return (
            <MainSection
              key={index}
              title={section.title}
              button={section.button}
            />
          );
        })}
        <List items={names} />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/today" element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
