let day = prompt('введите количество дней');
let second;
if (day > 27 && day < 32){
    second = day * 86400
    alert('В '+ day + ' днях ' + second + ' секунд')
} else {
    alert('Нет столько дней в месяце')
}