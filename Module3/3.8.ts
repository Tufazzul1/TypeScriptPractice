{

    // Polymorphism

    class Person {
        getSleep () {
            console.log("I'm sleeping 8 hours a day");
        }

    }

    class Student extends Person {
        getSleep () {
            console.log("I'm sleeping 7 hours a day");
        }
    }

    class Developer extends Person {
        getSleep () {
            console.log("I'm sleeping 6 hours a day");
        }
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    const getSleepingHours = (param: Person) =>{
        param.getSleep();
    }
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);



    class Shape {
        getArea (): number{
            return 0;
        }
    }

    // PI * r* r
    class Circle extends Shape {
        readius: number;
        constructor(radius: number){
            super();
            this.readius = radius;
        }
        getArea(): number {
            return Math.PI * this.readius * this.readius;
        }
    }

    // Hight * width 
    class Rectangle extends Shape {
        height: number;
        width: number;
        constructor(height: number, width: number){
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
    }

    const getShapeArea = (param: Shape) =>{
        console.log(`Area: ${param.getArea()}`);
    }
    const shape = new Shape();
    const shape1 = new Circle(5);
    const shape2 = new Rectangle(10, 20);

    getShapeArea(shape);  // 0
    getShapeArea(shape1);  // Area: 78.53981633974483
    getShapeArea(shape2);  // Area: 200
    // 
}