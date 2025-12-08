import React, { useState } from "react";

const generateId = () => Date.now();
const initialTodos = [];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [inputText, setInputText] = useState("");

  const handleinputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!inputText.trim()) return;

    const newTodo = {
      id: generateId(), 
      text: inputText.trim(), 
    };

    setTodos([newTodo, ...todos]); 
    setInputText("");
  };

  // 1. ✨ Todo 삭제 핸들러 추가
  const handleDelete = (idToDelete) => {
    // filter() 메서드를 사용하여, 
    // 삭제할 ID(idToDelete)와 다른 ID를 가진 요소만 남긴 새 배열을 만듭니다.
    setTodos((prevTodos) => 
      prevTodos.filter(todo => todo.id !== idToDelete)
    );
  };

  return (
    <div>
      <h2>Todo 리스트</h2>
      
      <form onSubmit={handleSubmit}> 
        <input 
          value={inputText}
          onChange={handleinputChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>  
      
      <ul>
        {todos.map((todo) => (
          // 2. ✨ 각 항목에 삭제 버튼 추가 및 이벤트 연결
          <li key={todo.id}>
            {todo.text}
            
            {/* 버튼 클릭 시 handleDelete 함수 호출. 
                클릭된 항목의 고유 ID(todo.id)를 인수로 넘깁니다. */}
            <button 
              onClick={() => handleDelete(todo.id)}
              style={{ marginLeft: '10px' }} // 버튼을 텍스트와 분리하기 위한 간단한 스타일
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;