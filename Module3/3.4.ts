{


    // Instance of gaurd

        class Animal {
         name : string;
         species : string;

        constructor(name : string, specs : string){
            this.name = name;
            this.species = specs;
        }

        makeSound (){
            console.log(`This makes a sound`);
        }

      }

      class Dog extends Animal {
        constructor(name : string, specs : string){
            super(name, specs);
        }
        makeBark (){
            console.log(`I am Barking`);
        }
        }   


        class Cat extends Animal {
        constructor(name : string, specs : string){
            super(name, specs);
        }
        makeMew (){
            console.log(`I am Mewing`);
        }
        }   

        // Smart way te handle korar jonne chaile amra function use korete pari

        const isDog = (animal : Animal) : animal is Dog => {
            return animal instanceof Dog;
        }

        const isCat = (animal : Animal) => {
        return animal instanceof Cat;
        }

        const getAnimal = (animal : Animal) => {
            if (isDog(animal)){
                animal.makeBark();
            }else if (isCat(animal)){
                animal.makeMew();
            }else{
                animal.makeSound();
            }
        }

        const dog = new Dog("Dog Bhai", "Dog");
        const cat = new Cat("Cat Bhai", "Cat");

        getAnimal(dog);
        getAnimal(cat);














}