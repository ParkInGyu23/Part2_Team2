import { useState } from "react";

function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: input,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <div className="contents">
        <h1>할 일 목록</h1>

        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="새로운 할 일을 입력하세요"
          />
          <button onClick={addTodo}>추가</button>
        </div>

        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
