/*
* TodoList

* 2025-12-05 : TodoList 작성 
* 2025-12-08 : 삭제기능 추가
*/
import { useState } from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <div
      className="todo-item"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
        borderBottom: "1px solid #eee",
      }}
    >
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "10px" }}>
        삭제
      </button>
    </div>
  );
}

// 메인 App 컴포넌트
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

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="contents" style={{ width: "400px", margin: "50px auto" }}>
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

        <div className="todo-list" style={{ marginTop: "20px" }}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
