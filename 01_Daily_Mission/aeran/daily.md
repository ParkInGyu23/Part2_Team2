# Aeran's Daily Mission

# Todo 리스트 만들기

리액트(React)를 사용하여 입력창에 할 일을 입력하고 목록에 추가하는 기능을 구현합니다.

## 1. 주요 기능
* **입력 및 추가**: 입력창에 값을 입력하고 '추가' 버튼을 클릭하거나 **엔터(Enter)**키를 누르면 목록에 추가됩니다.
* **이벤트 처리**: `<form>` 태그의 `onSubmit`을 활용하여 웹 표준에 맞는 이벤트 처리를 구현했습니다.
* **고유 ID 관리**: `uuid` 라이브러리를 사용하여 리스트 아이템마다 **고유한 ID**를 부여, 렌더링 성능과 안정성을 확보했습니다.

## 2. 소스 코드 (`Todo.jsx`)

```jsx
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
      id: uuidv4(), // ID생성
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
```