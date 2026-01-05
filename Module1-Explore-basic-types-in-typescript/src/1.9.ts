{

    // Type Alias 

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: "Tufazzul",
        age: 22,
        gender: "Male",
        contactNo: '017',
        address: "Modina Market"
    }

    const student2: Student = {
        name: 'Mir',
        age: 25,
        gender: 'Male',
        address: 'dhaka'
    }

    const student3: Student = {
        name: 'Mir',
        age: 25,
        gender: 'Male',
        address: 'dhaka'

    }



    // string , bolean
    type UserName = string
    type IsAdmin = boolean

    const userName : UserName = 'Tufazzul';
    const role : IsAdmin = true;

    //Function Alias

    type Add = (num1 : number, num2 : number) => number;
    const add : Add = (num1 , num2)  => num1 + num2;


    // 
}