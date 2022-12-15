
for (let i = 0; i <=20; i++) {
    if (i % 2) {
    } else {
        console.log([i]);
    }
}

var blacklist = ['ainazik', 'aktan', 'ariet', 'ruslan', 'tima',
        'AINAZIK', 'AKTAN', ' ARIET', 'RUSLAN', 'TIMA',
        'Ainazik', 'Aktan', 'Ariet', 'Ruslan', 'Tima']

var name = prompt('Введите имя')

var i = 0;

do{
    if(blacklist.includes(name)) {
      name = prompt('Введите имя:')
    } else {
        alert('Welcome');
        break;
    }
    i++
}while(true)