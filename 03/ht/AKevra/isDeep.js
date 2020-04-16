let a = prompt ('Введите а', '');
let b = prompt ('Введите b', '');
function isDeepEqual(a, b) {
    if (a !== b){
        return false;
    } else {
        return true;
    }
}
if (isDeepEqual(a, b)){
    document.write("YES");
} else {
    document.write("No");
}