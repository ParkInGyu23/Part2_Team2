import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

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

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <div>
      <h2>Todo 리스트</h2>
      <form onSubmit={handleSubmit}>
        <input 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;