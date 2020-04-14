let year = prompt('Введите год: ');

let month = prompt('Введите месяц: ');

let tagId = 'forCalendar';


function drawCalendar(year, month, tagId) {

    let numberOfDays;

    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            numberOfDays = 30;
            break;

        case 2:
            if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
                numberOfDays = 29;
            } else numberOfDays = 28;

            break;

        default:
            numberOfDays = 31;
    }

    let firstDayOfMonsth = new Date(year, month - 1, 1).getDay();

    if (firstDayOfMonsth == 0) {
        firstDayOfMonsth = 7;
    }

    let monthForDraw = [];

    for (let i = 1; i <= firstDayOfMonsth - 1; i++) {
        monthForDraw.push(' ');
    }

    for (let i = 1; i <= numberOfDays; i++) {
        monthForDraw.push(i);
    }

    if (numberOfDays != 28 && firstDayOfMonsth != 1) {
        while (monthForDraw.length != 35) {
            monthForDraw.push(' ');
        }
    }

    let stringForTag = '';
    let j = 0;

    for (let i = 0; i < monthForDraw.length; i++) {
        if (j == 7) {
            j = 0;
        }
        if (i == 0) {
            stringForTag = stringForTag + '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>';
        }
        if (j == 0) {
            stringForTag = stringForTag + '<tr><td>' + monthForDraw[i] + '</td>';
        } else if (j == 6) {
            stringForTag = stringForTag + '<td>' + monthForDraw[i] + '</td></tr>';
        } else stringForTag = stringForTag + '<td>' + monthForDraw[i] + '</td>';
        if (i == monthForDraw.length - 1) {
            stringForTag = stringForTag + '</table>';
        }
        j++;
    }

    return document.getElementById(tagId).innerHTML = `${stringForTag}`;
}

drawCalendar(year, month, tagId);