/*
* 계산기 만들기
* 조건 1. C 버튼을 눌렀을때 초기화 기능 구현
* 조건 2. 연속 된 계산이 가능하도록 구현 ex) 3 + 3 + 5 ... (오류.....왜....???)
* 조건 3. 연산자 클릭 시 연산자 표시창에 선택한 연산자 표시
*/

window.onload = function() {
  // 결과값, 연산자 표시, 숫자 버튼, 연산자 변수 선언
  const resultInput = document.querySelector('.result');
  const operatorInput = document.querySelector('.operator');
  const numberButton = document.querySelectorAll('.number');
  const calculationButton = document.querySelectorAll('.calculation');

  // 현재 입력중 숫자, 이전 숫자, 선택연산자, 새 숫자 입력
  let currentNumber = '';
  let prevNumber = '';
  let operator = 'null';
  let newInput = false;

  // 숫자버튼 클릭 함수
  function handleNumberClick(e) {
    // 클릭된 버튼 값
    const clickNumber = e.target.dataset.value;

    if (newInput) {
      // 만약 입력을 기다리는중 > 입력창 초기화
      currentNumber = clickNumber; 
      newInput = false;
    } else {
      // 현재 숫자 뒤에 클릭된 숫자 추가가
      currentNumber += clickNumber;
    }

    // 결과창에 숫자 표시
    resultInput.value = currentNumber;
  }

  // 연산자 버튼 클릭 함수
  function handleCalculationClick(e) {
    // 클릭된 버튼 값
    const clickValue = e.target.dataset.value;

    // C버튼 : 초기화
    if (clickValue === 'c') {
      currentNumber = '';
      prevNumber = '';
      operator = 'null';
      newInput = false;
      resultInput.value = '';
      operatorInput.value = '';
      return;
    }

    // = 버튼이 아니라면 새 연산자 재설정 후 연산자표시 보여지게게
    if (clickValue !== '=') {
      // 숫자가 입력되지 않았고, 이전 숫자도 없으면 연산자 무시
      if (currentNumber === '' && prevNumber === '') {
        return;
      }
      
      // 숫자가 있다면 저장
      if (currentNumber !== '') {
        prevNumber = currentNumber;
        currentNumber = '';
        newInput = true;
      }
      
      // 연산자 변경 (숫자를 기다리는 상태에서도 연산자 변경 가능)
      operator = clickValue;
      operatorInput.value = operator;
    }

    // = 버튼 : 계산 수행
    if (clickValue === '=') {
      calculateResult();
      operatorInput.value = '=';
      prevNumber = '';
      operator = 'null';
      newInput = true;

      // 계산 이후 연산자 2초뒤 초기화
      if (operator === 'null') {
        setTimeout(() => {
          operatorInput.value = '';
        }, 2000);
      }
    }
  }

  // 계산 수행
  function calculateResult() {
    let result;

    const num1 = parseFloat(prevNumber);
    const num2 = parseFloat(currentNumber);

    // 숫자가 아니라면 계산 불가
    if(isNaN(num1) || isNaN(num2)) {
      return;
    }

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-' :
        result = num1 - num2;
        break;
      case 'x' :
        result = num1 * num2;
        break;
      case '/' :
        result = num1 / num2;
        break;
      default:
        return;
    }

    // 결과 표시시
    resultInput.value = result;
    currentNumber = String(result);
  }

  // 버튼 이벤트 등록
  numberButton.forEach(button => {
    button.addEventListener('click', handleNumberClick);
  });

  calculationButton.forEach(button => {
    button.addEventListener('click', handleCalculationClick);
  });
}