let a = prompt('введите первое число');
let e = prompt('введите операцию');
let b = prompt('введите второе число');
let result;
a = +a;
b = +b;
if (e == '+'){
    result = a + b;
} else{
    if (e == '-'){
        result = a - b;
    } else{
        if (e == '*'){
            result = a * b;
        } else{
            if (e == '/'){
                result = a / b;
            }
        }
    }
}
alert('результат: ' + result);

