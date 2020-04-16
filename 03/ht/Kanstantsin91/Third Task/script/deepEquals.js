function deepEquals(variableOne, variableTwo) {

    if (typeof variableOne != typeof variableTwo) {
        return false;
    } 

    function sortbyKey(obj) {

        let map = new Map();

        for (let key in obj) {
            map.set(key, obj[key]);
        }

        let mapKeys = Array.from(map.keys()).sort();

        let sortedObj = {};

        for (let i = 0; i < mapKeys.length; i++) {
            sortedObj[`${mapKeys[i]}`] = map.get(mapKeys[i]);
        }

        return sortedObj;
    }

        if(typeof variableOne == 'object'){
        variableOne = sortbyKey(variableOne);
        variableTwo = sortbyKey(variableTwo);
}

    function variableToString(variable) {
        let objSrt = '';

        if (typeof variable == 'object' && variable != null) {
            variable = sortbyKey(variable);
            for (let key in variable) {
                if (typeof variable[key] == 'function') {
                    objSrt = (objSrt + key + variable[key]).replace(/\s/g, '');
                } else if (typeof variable[key] == 'string') {
                    objSrt = (objSrt + key + '\'' + variable[key] + '\'');
                } else if (typeof variable[key] != 'object' || variable[key] == null) {
                    objSrt = objSrt + key + variable[key];
                } else objSrt = objSrt + variableToString(variable[key]);
            }
            return objSrt;
        } else if (typeof variable == 'function') {
            return (objSrt + variable).replace(/\s/g, '');
        } else return objSrt + variable;
    }
    return variableToString(variableOne) === variableToString(variableTwo);
}

let a = { b: {x : 4, c: '3'}, l: [1, 1] };
let b = { a: 4, b: { c: '3', x:4 }, l: [1, 1] };

a.a=4;

alert(deepEquals(a,b));