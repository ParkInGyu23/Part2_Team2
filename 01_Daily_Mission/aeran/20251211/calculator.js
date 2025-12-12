// 초기값 변수 선언
let currentNumber = '';
let previousNumber = null;
let operator = null;
let resultDisplayed = false;

const resultInput = document.querySelector('.result');
const operatorInput = document.querySelector('.operator');
const numberButtons = document.querySelectorAll('.number');
const calculationButtons = document.querySelectorAll('.calculation');


const initialize = () => {
    currentNumber = '';    
    previousNumber = null; 
    operator = null;      
    resultInput.value = ''; 
    operatorInput.value = ''; 
};
    




// 숫자 핸들
const handleNumberClick = (value) => {
    currentNumber += value;
    resultInput.value = currentNumber;
};

// 연산 
const handleCalculationClick = (value) => {
    //C버튼 클릭시 
    if (value === 'c') {
        initialize(); 
        return; 
    }
};


//숫자버튼 
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;
        handleNumberClick(value);
    });

});
// 계산기 버튼
calculationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value; 
        handleCalculationClick(value);
    });
});


// 시작 시 클린한 상태로 만든다
initialize();
    
    
