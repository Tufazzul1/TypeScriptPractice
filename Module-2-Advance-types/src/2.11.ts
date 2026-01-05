{
    // utility type


    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    // pick
    type NameAge = Pick<Person, "name" | "age">;

    // Omit
    type ContactInfo = Omit<Person, "name" | "age">

    // required
    type PersonRequired = Required<Person>

    // partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: 'Mr. xy',
        age: 10,
        contactNo: '017'
    }
    // person1.name = 'Mr.zxc' // Now Its not changable

    // Record type

    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>
    const EmptyObj: Record<string, unknown> = {}

    const Obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc'
    }








    // 
}