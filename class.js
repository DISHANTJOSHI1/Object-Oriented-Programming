// private properties can not be accessed by any other class or subclass except we can use setter and getter.
// Private properties are available only inside the class in which they are defined.
// protected properties can be accesessed by any class which is inherrited from parent class in which protected property is defined.
// By default every property of a class is public which can be accessed by all the classes. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Victor', 'VicJ');
console.log(person);
//console.log(person.name,person.username)
person.printAge();
person.setType('Old Guy');
//############################ Inheritence ##################################
// we can override properties of super class by using extend keyword
var Dishant = /** @class */ (function (_super) {
    __extends(Dishant, _super);
    function Dishant(username) {
        var _this = _super.call(this, 'Dishant', username) // in the constructor and pass the argumnet equal to supercalass but ur own values. 
         || this;
        _this.age = 22;
        return _this;
    }
    return Dishant;
}(Person));
var dish = new Dishant('Dfapot');
console.log(dish);
//################ Getters & Setters ##################
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Plant.prototype.setplant = function (Pname) {
        this.Species = Pname;
    };
    Plant.prototype.getplant = function () {
        return this.Species;
    };
    return Plant;
}());
var plant = new Plant();
plant.setplant('Green Plant');
console.log(plant.getplant());
