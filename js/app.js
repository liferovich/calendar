let calendar = document.getElementById("calendar");

const createCalendar = (month, year) => {

    let mon = month - 1;
    let date = new Date(year, mon); //1-е число месяца

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // пробелы для первого ряда
    for (let i = 0; i < getDayWeek(date); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while (date.getMonth() == mon) {
        table += '<td>' + date.getDate() + '</td>';

        if (getDayWeek(date) % 7 == 6) {
            table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    // пробелы для последнего ряда
    if (getDayWeek(date) != 0) {
        for (let i = getDayWeek(date); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    calendar.innerHTML = table;
}

function getDayWeek(date) { // день недели от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // воскресенье 
    return day - 1;
}

let button = document.getElementById("btnNewDate");
button.onclick = () => {
    let monthInput = prompt("Введите номер месяца");
    let yearInput = prompt("Введите год");
    if (monthInput && yearInput){
        createCalendar(monthInput, yearInput);
    } else {
        calendar.innerHTML = 'неверные данные';
    }   
}
