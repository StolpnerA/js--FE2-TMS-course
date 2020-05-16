let searchYear = +prompt("Ведите год","2020");
let searchMonth = +prompt("Введите месяц","4");

let PreviousButton = document.body.querySelector(".ButPrevious");
let NextButton = document.body.querySelector(".ButNext");

PreviousButton.addEventListener("click", showPreviousMonth)
NextButton.addEventListener("click", showNextMonth);

let KalendarTask = {};

function drawCalendar(searchYear, searchMonth, element) {  

    let daysQuantity = new Date ( searchYear, searchMonth , 0);
    let searchingDate = new Date (searchYear, searchMonth - 1,);
    let firstDay = searchingDate.getDay();
    let lastDay = daysQuantity.getDay();
    console.log(searchingDate);

    if (firstDay === 0) {
        firstDay = 7;
        } 
    if (lastDay === 0) {
        lastDay = 7;
        }    

    let table = renderEmptyTd_Before(firstDay);
    table += renderTdForMonth(daysQuantity, searchingDate)
    table += renderEmptyTd_After(lastDay);

    element.innerHTML = table;

    pressOnDay()
}
function renderEmptyTd_Before(day) {
    let tableValue = `<table>
                    <tr>
                        <td class='daysName'>ПН</td>
                        <td class='daysName'>ВТ</td>
                        <td class='daysName'>СР</td>
                        <td class='daysName'>ЧТ</td>
                        <td class='daysName'>ПТ</td>
                        <td class='daysName'>СБ</td>
                        <td class='daysName'>ВС</td>
                    </tr>`;
                    
    for (let i = 0; i < day - 1; i++) {
        tableValue += "<td></td>";    
    }
    return tableValue;
}
function renderTdForMonth(quantity, Day) {
    let tableValue ='';
    for (i = 1; i < quantity.getDate() + 1; i++) {
        Day.setDate(i);
        let day = Day.getDay();
        if (day == 0) {
            day = 7;
            }

        tableValue += `<td timesince ="${Day.getTime()}" >` + Day.getDate();
        for (let key in KalendarTask) {
            if (Day.getTime() == key) {
                tableValue += makeDivForTasks(key);
            }
        }
        tableValue += `</td>`;

        if ( Day.getDay() % 7 == 0) {
        tableValue += "<tr> </tr>"
        }
    } 
    return tableValue;
}
function renderEmptyTd_After(day) {
    let tableValue = '';
    for (i = 0; i < (7 - day); i++) {
        tableValue += "<td></td>";   
        }    
    return tableValue;
}
function showNextMonth() {
    searchMonth += 1;
    drawCalendar(searchYear, searchMonth, calendar);
}
function showPreviousMonth() {
    searchMonth -= 1;
    drawCalendar(searchYear, searchMonth, calendar);
}
function pressOnDay(){
    let editCell = document.getElementsByTagName('td');
    for(let i = 0; i < editCell.length; i++) {
        if (editCell[i].innerHTML != '' && editCell[i].className != 'daysName') {
            editCell[i].addEventListener('click', inputTasks)
        }
    }
}
function inputTasks() {
    let td = this;
    task = prompt('','помыть кофемашину');
    if (td.lastChild.className !== 'taskClass') {
        let taskArr = [task];    
        KalendarTask[td.getAttribute('timeSince')] = taskArr;
    } else {
        let taskArrCopy = KalendarTask[td.getAttribute('timeSince')];
        taskArrCopy.push(task);
    }
    td.insertAdjacentHTML('beforeend', `<div class='taskClass'>*${task}</div>`);
}
function makeDivForTasks(keyValue) {
    let tableValue = '';
    for(let i = 0; i < KalendarTask[keyValue].length; i++) {
        tableValue += `<div class='taskClass'>` + KalendarTask[keyValue][i] + `</div>`;    
    }
    return tableValue;
}

drawCalendar(searchYear, searchMonth, calendar);
