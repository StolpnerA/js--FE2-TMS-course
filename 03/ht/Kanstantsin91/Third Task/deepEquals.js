function deepEquals(variableOne, variableTwo) {

    if (typeof variableOne != typeof variableTwo) {
        return false;
    }

    function variableToString(variable) {
        let objSrt = '';


        if (typeof variable == 'object' && variable != null) {
            for (let key in variable) {
                if (typeof variable[key] == 'function') {
                    objSrt = (objSrt + key + variable[key]).replace(/\s/g, '');
                } else if (typeof variable[key] == 'string') {
                    objSrt = (objSrt + key + '\'' + variable[key] + '\''), '');
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