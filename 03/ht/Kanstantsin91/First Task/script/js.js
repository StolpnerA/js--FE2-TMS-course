let palindromPretender;

do {

    palindromPretender = prompt('Введите слово: ');

    if (palindromPretender != '' && palindromPretender != null) {

        function isPalidrom(palindromPretender) {
            let palindromPretenderReversed = palindromPretender.toLowerCase().split('').reverse().join('');
            if (palindromPretenderReversed === palindromPretender.toLowerCase()) {
                return true;
            } else return false;
        }

        if (isPalidrom(palindromPretender)) {
            alert('Это слово-палиндром!');
        } else alert('Это не палиндром!');
    } else alert('Ничего не введено!');

} while (palindromPretender != '' && palindromPretender != null);