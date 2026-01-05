{
    // Task -1 -----------------------

    const firstProgram  = () : string => {
        const result : string = "Hello World, I will complete this course successfully and become a Next level Web Developer!"
        return result
    }
    const res = firstProgram();
    // console.log(res);


    // Task-2 ------------------------

    // type OptionalAndLitaral = {
    //     name: string;
    //     age: number;
    //     role?: 'admin'| 'user' | 'guest';
    // }

    // const functionWithOptionalAndLitaral = (name: string, age: number, role? : 'admin' | 'user' | 'guest') =>{
    //     return console.log(`Name : ${name}, Age : ${age}`)
    // }

    // console.log(functionWithOptionalAndLitaral('Tufazzul', 22))

    type OptionalAndLiteral = {
        name: string;
        age: number;
        role?: 'admin' | 'user' | 'guest';
    };
    
    const functionWithOptionalAndLiteral = (user: OptionalAndLiteral) => {
        const { name, age, role = 'guest' } = user;
        console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);
    };
    
    // Example usage
    functionWithOptionalAndLiteral({ name: 'Tufazzul', age: 22, role: 'admin' });
    functionWithOptionalAndLiteral({ name: 'Husen', age: 21 }); 
    


    // task -3 -------------------------

    type Person ={
        name: string;
        Address: string;
        hairAndEyeColor : string;
        incomeAndExpense : number;
        hobbies : string;
        familyMembers: number;
        job: string;
        skills: string;
        maritalStatus : string;
        haveFriends : boolean
    }

    const person : Person = {
        name: 'Tufazzul',
        Address: 'Sylhet',
        hairAndEyeColor: 'sdf',
        incomeAndExpense: 1000,
        hobbies: 'Gamming',
        familyMembers: 5,
        job: 'Web develoepr',
        skills: 'Mern-stack',
        maritalStatus: 'single',
        haveFriends: true,
    }



    // 
}