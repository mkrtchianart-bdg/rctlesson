import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem('storage');
    return savedLists ? JSON.parse(savedLists) : ['list1', 'list2', 'list3'];
  });
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(0);

  const handleRemove = (itemToRemove) => {
    setLists(lists.filter(item => item !== itemToRemove));
  };

  const handleAdd = () => {
    if (inputValue.trim()) {
      setLists([...lists, inputValue]);
      setInputValue('');
    }
  };

  useEffect(() => {
    localStorage.setItem('storage', JSON.stringify(lists));
    console.log(lists.length);
    return () => {
      console.log('Component unmounted');
    };
  }, [lists]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 25) {
          clearInterval(timer);
          return 0;
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div className="todo-container">
      <div className="counter-section">
        <span onClick={() => setCount(count + 1)}>{count}</span>
      </div>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new item"
        />
        <button onClick={handleAdd}>Add List</button>
      </div>
      <div className="lists-section">
        {lists.map((item, index) => (
          <div key={index} className="list-item">
            {item}
            <button onClick={() => handleRemove(item)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList; 