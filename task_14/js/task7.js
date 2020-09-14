let p = document.getElementById('id');
let x = prompt('Введите число');
let temp;
let result = 1;
while (x > 0){
    temp = x % 10;
    result = result * temp;
    x = (x - temp) / 10;
}
console.log(result);
p.insertAdjacentHTML('beforeend',result);
