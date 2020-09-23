let name = prompt('введите Ваше имя');
let clearName = name.trim();
if (clearName == 0 || clearName == ' '){
    alert('Неверно введено имя')
} else{
    alert('Здравствуйте ' + name)
}