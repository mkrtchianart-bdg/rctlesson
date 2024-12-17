import React from "react";
import Button from "./Button";
import "./TodoList.css";

class TodoList extends React.Component {
  state = {
    tasks: [],
    inputValue: "",
  };

  addTask = () => {
    if (this.state.inputValue.trim()) {
      this.setState({
        tasks: [...this.state.tasks, this.state.inputValue],
        inputValue: "",
      });
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.addTask();
    }
  };

  editTask = (index) => {
    const newTask = prompt("Edit task:", this.state.tasks[index]);
    if (newTask !== null && newTask.trim()) {
      const newTasks = [...this.state.tasks];
      newTasks[index] = newTask;
      this.setState({ tasks: newTasks });
    }
  };

  deleteTask = (index) => {
    const newTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div className="todo-container">
        <h1>TO DO List</h1>
        <div className="input-container">
          <input
            className="task-input"
            placeholder="Enter a task"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyUp={this.handleKeyPress}
          />
          <Button text="Add Task" onClick={this.addTask} />
        </div>
        <div className="tasks-list">
          {this.state.tasks.map((task, index) => (
            <div key={index} className="task-item">
              <span>{task}</span>
              <div className="task-buttons">
                <Button text="Edit" onClick={() => this.editTask(index)} />
                <Button text="Delete" onClick={() => this.deleteTask(index)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
