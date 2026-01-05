{
    // Interface


    // Object example
    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }


    type UserWithRole1 = User1 & { role: string }
    interface UserWithRole2 extends User2 { role: string }

    const user1: UserWithRole1 = {
        name: "Tufazzlul",
        age: 23,
        role: 'User',
    }

    const user2: UserWithRole2 = {
        name: "Husen",
        age: 33,
        role: 'Manager',
    }


    type RollNumber = number


    // js --> Object , array --> Object , function --> object


    // Array example 
    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber1: Roll1 = [1, 2, 3];
    const rollNumber2: Roll2 = [1, 2, 3];



    // Function example

    type Add1 = (num1 : number , num2 : number) => number;
    interface Add2 {
        (num1 : number , num2 : number) : number
    }
    const add1 : Add1 = (num1 , num2) => num1 + num2;
    const add2 : Add2 = (num1 , num2) => num1 + num2;



    // 
}