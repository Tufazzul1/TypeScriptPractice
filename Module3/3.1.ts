{
    // OOP - Class 

    // class Animal {
    //     public name : string;
    //     public species : string;
    //     public sound : string;  -- Eigual class er property



    //     constructor (public name : string,  public species : string,  public sound: string){
    //         this.name = name;
    //         this.species= species;
    //         this.sound= sound;
    //     }

    //     makeSound (){
    //         console.log(`The ${this.name} says ${this.sound}`);
    //     }
    //   }


    //Alternative -- parameter properties 
        class Animal {
        
        constructor (public name : string,  public species : string,  public sound: string){
        }
        makeSound (){
            console.log(`The ${this.name} says ${this.sound}`);
        }
        humanSound (){
            console.log(`${this.name} ${this.species} ${this.sound}`);
        }
    }

    const dog = new Animal("German Sheperd bhai", "Dog", "Ghew Ghew");
    const cat = new Animal("Persian Bhai","Cat","mew mew");
    const Human = new Animal("Manushe", "khore","Ghaw GHaw");


    dog.makeSound();
    Human.humanSound();




    // 
}