{
    // generic type

    type GenericArray<T> = Array<T>


    // const rollNumber: number[] = [3, 6, 8];
    const rollNumber: GenericArray<number> = [3, 6, 8];

    // const mentors: string[] = ['Mr.x', 'Mr.y', 'Mr.z'];
    const mentors: GenericArray<string> = ['Mr.x', 'Mr.y', 'Mr.z'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];




    // Array of object 

    interface User {
        name : string,
        age: number
    }

    const user: GenericArray<User> = [
        {
            name: "Tufazzul",
            age: 100,
        },
        {
            name: "Jhankar",
            age: 110
        },

    ]


    const add = (x: number, y: number): number => x + y;
    add(10, 20);



    // Generic tuple 

    type GenericTuple<X, Y> = [X, Y]

    const manush: GenericTuple<string, string> = ['Mr.X', 'Mr.Y']

    const UserWithId: GenericTuple<number, { name: string, email: string }> = [1234, { name: 'persian', email: 'a@gmail.com' }]

    // 
}