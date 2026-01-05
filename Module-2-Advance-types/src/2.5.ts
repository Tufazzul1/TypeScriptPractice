{
    // function with generics

    const createNormalArray = (...param: string[] ) : string[] =>{
        return param;
    }

    const response = createNormalArray('Hello', 'Mello', 'Chello');



    const createArray = (param : string) : string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param : T) : T[] => {
        return [param]
    }

    type Person ={
        name : string;
        age: number;
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<boolean>(true)
    const resGenericObg = createArrayWithGeneric<Person>({name: "tufazzul", age : 22});



    const createArrayWithTuple = <T, Q , S>(param1 : T, param2 : Q, param3 : S) : [T, Q, S] => {
        return [param1, param2, param3]
    }

    const createArrayWithGeneric2 = <T, Q>(param : T, param1 : Q) : [T, Q] => {
        return [param, param1]
    }

    interface Ello {
        name : string;
        age: number;
    }

    const res2 = createArrayWithTuple<string, string, number>('Bangladesh', 'China', 2)
    const res11 = createArrayWithGeneric2<string , {name: string}>('Bangladesh', {name : 'asia'});


    const addCourseToStudent = <T>(student : T) =>{
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: 'Tufazzul' , devType : 'NLWD', email :"@gmail.com"});
    console.log(student1);

    const student2 = addCourseToStudent({name: 'EKll' , devType : 'NLWD', email :"Y@gmail.com"})
    console.log(student2)


    // 
}