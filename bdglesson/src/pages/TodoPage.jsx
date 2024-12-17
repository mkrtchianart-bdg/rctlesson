import React from "react";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "./TodoPage.css";

function TodoPage() {
  const navigate = useNavigate();

  return (
    <div className="todo-page">
      <div className="back-button-container">
        <Button text="Back to Home" onClick={() => navigate("/")} />
      </div>
      <TodoList />
    </div>
  );
}

export default TodoPage;
