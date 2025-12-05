'''jsx
// 작성 중 한계 봉착
import {useState} from "react";

const mockData = [
{
id:0,
text: "",
}
]

function App() {
const [todos, setTodos] = useState(mockData)

const [inputText,setInputText] = ("")

const onSubmit = (text)=>{
const newTodo = {
id : 0,
text : text,
}

    setTodos([newTodo, ...todos]);

}

const handleinputChange = (e) =>{
setInputText(e.target.value);
}

const handleSubmit = (e) =>{
e.preventDefault();
}

return (

  <div>
    <h2>Todo 리스트</h2>
    <form onSubmit={handleSubmit}> 
      <input onChange={handleinputChange}/>
      <button type="submit">추가</button>
    </form>  
    <ul></ul>
</div>
)
}
```

'''jsx
//제미나이 AI 답변
import React, { useState } from "react";

// 고유 ID를 생성하는 간단한 함수 (uuid 대안)
const generateId = () => Date.now();

// 초기 상태는 빈 배열이 좋습니다. (mockData 제거)
const initialTodos = [];

function App() {
// 1. 상태를 useState 함수로 정확히 초기화
const [todos, setTodos] = useState(initialTodos);
const [inputText, setInputText] = useState("");

// 2. 입력 값 변경 핸들러
const handleinputChange = (e) => {
setInputText(e.target.value);
};

// 3. 폼 제출 핸들러 (이전 onSubmit 로직을 포함)
const handleSubmit = (e) => {
// 페이지 새로고침 방지
e.preventDefault();

    // 입력 값이 비어있으면 추가하지 않습니다.
    if (!inputText.trim()) return;

    const newTodo = {
      // 고유 ID 사용! (이전 코드의 'id: 0' 수정)
      id: generateId(),
      // 입력 상태(inputText)의 값을 사용
      text: inputText.trim(),
    };

    // 불변성을 지키며 새 Todo를 todos 상태에 추가
    setTodos([newTodo, ...todos]);

    // 입력 필드 초기화
    setInputText("");

};

return (

<div>
<h2>Todo 리스트</h2>

      <form onSubmit={handleSubmit}>
        <input
          // 4. 입력 값 상태 연결 (제어 컴포넌트)
          value={inputText}
          onChange={handleinputChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>  

      <ul>
        {/* 5. todos 배열을 순회하며 <li> 렌더링 */}
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>

);
}

export default App;
'''
