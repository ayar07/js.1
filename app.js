var blacklist = ['ainazik', 'aktan', 'ariet', 'ruslan', 'tima',
        'AINAZIK', 'AKTAN', ' ARIET', 'RUSLAN', 'TIMA',
        'Ainazik', 'Aktan', 'Ariet', 'Ruslan', 'Tima']

var name = prompt('Введите имя')

var i = 0;

do{
    if(blacklist.includes(name)) {
      name = prompt('Введите имя:')
    } else {
        alert(`Добро пожаловать ${name}`);
        break;
    }
    i++
}while(true)