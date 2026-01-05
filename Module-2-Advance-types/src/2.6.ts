{
    // constraints 

    const addCourseToStudent = <T extends {id : number; name : string; email: string} >(student: T) => {
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }


    const student3 = addCourseToStudent({
        id: 444,
        name : 'Mr Jayed Khan',
        email: 'jayedkhan@gmail.com',
        emni : 'emni'
    })

    const student1 = addCourseToStudent <{
        id: number;
        name: string;
        devType: string;
        email: string;
    }>({
        id : 222,
        name: 'Tufazzul',
        devType: 'NLWD',
        email: "@gmail.com"
    });
    console.log(student1);

    const student2 = addCourseToStudent({
        id : 333,
        name: 'EKll',
        hasWatch: 'Apple Watch',
        email: "Y@gmail.com"
    })
    console.log(student2)






    //
}