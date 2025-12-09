/*
** 가정
* 사용자가 버튼을 빠르게 두 번 연속으로 눌렀다고 가정합시다.
* 첫 번째 클릭 후 카운트가 1이 됩니다.
* 두 번째 클릭 후 카운트가 2가 됩니다.

** 요청사항. useRef를 사용하여 최신 상태 참조 (권장)
* 3초 후에 알림창이 총 두 번 뜰 것입니다. 클릭 당시의 값이 아니라 가장 최신 카운트를 출력하도록 해주세요.
* useRef는 컴포넌트의 전체 생애 주기 동안 변하지 않는 참조 객체를 생성하며, 이 객체의 .current 값은 리렌더링과 관계없이 항상 가장 최신 값으로 즉시 업데이트할 수 있습니다.
*/

import { useState, useRef } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);

  const handleClick = () => {
    setCount(count + 1);
    latestCount.current = count + 1;
  };

  setTimeout(() => {
    alert(`최신 카운트: ${latestCount.current}`);
  }, 3000);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default Count;