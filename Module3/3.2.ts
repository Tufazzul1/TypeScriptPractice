{

    // OOP Inheritance

    class Perent {
        name : string;
        age : number;
        address : string;
        constructor(name : string, age : number, address : string){
            this.name= name;
            this.age = age;
            this.address= address;
        }
    }

    class Student extends Perent {
        
        constructor(name : string, age : number, address : string){
            super(name, age, address);
        }
        
    }

    const student1 = new Student("Md Tufazzul", 23, "Uganda");
    

        class Teacher extends Perent {
            designation : string;

        constructor(name : string, age : number, address : string, designation : string){
            super(name, age, address);
            this.designation= designation;
        }
        
        getSleep(numOfHours : number){
            console.log(`${this.name} will sleep for ${numOfHours} hours`);
        }
        teacherAge(numberOfAge: number){
            console.log(`${this.name} is ${numberOfAge} years old`);
        }
    }


    const teacher1 = new Teacher ("Mr Teacher", 45, "Uganda", "America");

    teacher1.getSleep(8);
    teacher1.teacherAge(45);



}