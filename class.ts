// private properties can not be accessed by any other class or subclass except we can use setter and getter.
// Private properties are available only inside the class in which they are defined.
// protected properties can be accesessed by any class which is inherrited from parent class in which protected property is defined.
// By default every property of a class is public which can be accessed by all the classes. 

class Person{
    name: string;
    protected type: string;
    protected age : number = 27;

    constructor(name:string, public username: string){
        this.name = name;
    }
    printAge(){
        console.log(this.age);
    }
    setType(type:string){
        this.type=type;
        console.log(this.type);
    }
}

const person = new Person('Victor', 'VicJ');
console.log(person)
//console.log(person.name,person.username)
person.printAge();
person.setType('Old Guy')
  
//############################ Inheritence ##################################

// we can override properties of super class by using extend keyword

class Dishant extends Person {
    name: 'Ram';
    age: 22; //Doubt ????????????????? age is protected in the super class.. Why no error here?  

    constructor(username:string){     // if making another constructor in sub class then need to write super key
        super('Dishant',username)     // in the constructor and pass the argumnet equal to supercalass but ur own values. 
        this.age = 22;
    }

}
const dish =  new Dishant('Dfapot');
console.log(dish)

//################ Getters & Setters ##################

class Plant{
    private Species: string;

    setplant(Pname: string) {
        this.Species = Pname;
        
    }
    getplant(){
        return this.Species;
    }

    // get species(){
    //     return this.Species;
    // }
    // set species(value:string){
    //     if (value.length>3){
    //         this.Species = value;
    //     }else{
    //         this.Species = "Default";
    //     }
    // }
    
}

const plant = new Plant();
plant.setplant('Green Plant')
console.log(plant.getplant())