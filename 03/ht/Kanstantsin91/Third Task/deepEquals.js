function deepEquals(variableOne, variableTwo) {

    if (typeof variableOne != typeof variableTwo) {
        return false;
    } 

    function sortbyKey (obj){

        let arrObj = [];
        for(let key in obj){
            arrObj.push({id: key, name:obj[key]});
        }
        
        function sortInnerObjects (a, b) {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        };
        
        obj = arrObj.sort(sortInnerObjects);
        return obj;
        }

        if(typeof variableOne == 'object'){
        variableOne = sortbyKey(variableOne);
        variableTwo = sortbyKey(variableTwo);
}

    function variableToString(variable) {
        let objSrt = '';

        if (typeof variable == 'object' && variable != null) {
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