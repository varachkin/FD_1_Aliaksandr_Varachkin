let firstNum = +prompt('введите первое число');
let act = prompt('введите операцию');
let secondNum = +prompt('введите второе число');
let result;
if (act == '+'){
    result = firstNum + secondNum;
}
if (act == '-'){
    result = firstNum - secondNum;
    }
if (act == '*'){
    result = firstNum * secondNum;
    }
if (act == '/'){
    result = firstNum / secondNum;
            }
alert('результат: ' + result);