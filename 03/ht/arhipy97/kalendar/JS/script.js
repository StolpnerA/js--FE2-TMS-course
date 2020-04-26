function kalendar(year, month, element) {
    
let DaysQuantity = new Date ( year, month , 0);
let kd = new Date (year, month - 1,);
let firstday = kd.getDay();
if (firstday == 0) {
    firstday = 7;
    }

let table = "<table><tr><td>ПН</td><td>ВТ</td><td>СР</td><td>ЧТ</td><td>ПТ</td><td>СБ</td><td>ВС</td></tr>";

for (let i = 0; i < firstday - 1; i++) {
    table += "<td></td>";    
}
//  calendar
for (i = 1; i < DaysQuantity.getDate() + 1; i++) {
    kd.setDate(i);
    let day = kd.getDay();
    if (day == 0) {
        day = 7;
        }
    //  для наглядности дни недели 
    table += "<td>" + kd.getDate() + "  day" + firstday + "</td>";
    if ( kd.getDay() % 7 == 0) {
        table += "<tr> </tr>"
    }
}
// next month
for (i = 0; i < (7 - DaysQuantity.getDay()); i++) {
    table += "<td></td>"
    }
element.innerHTML = table;
}

let yea = +prompt("Ведите год","2020");
let mont = +prompt("Введите месяц","4");
kalendar(yea, mont, calendar);