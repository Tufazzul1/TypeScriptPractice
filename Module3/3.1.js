{
    // OOP - Class 
    var Animal = /** @class */ (function () {
        // parameter properties 
        function Animal(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        Animal.prototype.makeSound = function () {
            console.log("The ".concat(this.name, " says ").concat(this.sound));
        };
        return Animal;
    }());
    var dog = new Animal("German Sheperd bhai", "Dog", "Ghew Ghew");
    var cat = new Animal("Persian Bhai", "Cat", "mew mew");
    console.log(dog.name, dog.sound);
    dog.makeSound();
    // 
}
