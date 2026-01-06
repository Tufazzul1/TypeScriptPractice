{
    // Type Gaurds
    // Typeof -------> type guards
    var add = function (param1, param2) {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
}
