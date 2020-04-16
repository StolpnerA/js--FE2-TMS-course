'use strict';
let SomeString = prompt ('Введите слово?', "abba");

function isPalindrom (SomeString){
    let strLen = SomeString.length;
   for (let i=0; i < strLen / 2; i++){
       if (SomeString[i] !== SomeString[strLen - 1 - i]){
        return false;
       }
   }
   return true;
}
if (isPalindrom (SomeString)){
    document.write("The word is a palindrome");
} else {
    document.write("The word is NOT a palindrome");
}

