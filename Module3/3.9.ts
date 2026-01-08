{
    // Abstraction : 1. Interface, 2. Abstrac class

    // Idea
    interface Vehicle1{
        startEngine(): void;
        stopEngine() : void;
        move(): void;

    }

    // object er khetre 
    // const vehicle1 : Vehicle1 = {
    //     name : "Toyota",
    //     model : 2024
    // }
    // real Implementation
    class Car1 implements Vehicle1{
        startEngine(): void {
            console.log(`I'm starting the car engine`);  
        }

        stopEngine(): void {
            console.log(`I'm stopping the car engine`);  
        }

        move(): void {
            console.log(`I'm moving the car`);  
        }
        test(){
            console.log("I'm just testing");
        }

    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();



    // abstract class ----------------

    abstract class Car2 {
        abstract StartEngine(): void ;
        abstract stopEngine(): void ;
        abstract move(): void ;
        test(){
            console.log("I'm just testing");
        }
    }

    class ToyotaCar extends Car2 {
        StartEngine(): void {
            console.log("Toyota car engine started");
        }   
        stopEngine(): void {
            console.log("Toyota car engine stopped");
        }
        move(): void {
            console.log("Toyota car is moving");
        }                       
    }

    const hondaCar = new ToyotaCar();
    hondaCar.StartEngine();





    // 
}