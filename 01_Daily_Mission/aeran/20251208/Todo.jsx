import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Todo.css';

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!inputValue.trim()) return;

    const newTodo = {
      id: uuidv4(),
      text: inputValue,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container"> 
      <h2>Todo 리스트</h2>
      <form onSubmit={handleSubmit} className="todo-form">
        <input 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="할 일을 입력하세요"
          className="todo-input" 
        />
        <button type="submit" className="button">추가</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <button 
              onClick={() => handleDelete(todo.id)} 
              className="button" 
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;