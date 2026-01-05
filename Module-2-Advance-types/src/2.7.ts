{
    // generic constraints with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }


    type Owner = 'bike' | 'car' | 'ship'; // manuallly 

    type Owner2 = keyof Vehicle


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }


    const user = {
        name: 'Tufazzul',
        age: 22,
        address: 'Sylhet'
    }

    const car = {
        model: 'Toyota 100',
        year: 22,
    }

    const result = getPropertyValue(car, 'model');
    console.log(result)


    // user['name'] 22
    // obj['key'] 22







    // 
}