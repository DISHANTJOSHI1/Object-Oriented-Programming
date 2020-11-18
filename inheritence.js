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
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.setcoordx_y = function (x, y) {
        this.coordx = x;
        this.coordy = y;
    };
    // //
    // getcoordx_y(){
    //     return this.coordx, this.coordy;
    // } 
    animal.prototype.eat = function () {
        console.log('I am eating');
    };
    animal.prototype.sleep = function () {
        console.log('I ma sleeping');
    };
    animal.prototype.move = function () {
        console.log('I am moving');
    };
    animal.prototype.makenoice = function () {
        console.log('I am making noice');
    };
    return animal;
}());
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cat;
}(animal));
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.eat = function () {
        console.log('Not Hungry');
    };
    dog.prototype.ReturnToOwner = function () {
        console.log('This is my X coordinate ' + this.coordx, 'and Y coordinate ' + this.coordy);
    };
    return dog;
}(animal));
var Dog = new dog();
var Cat = new cat();
Cat.eat();
Dog.eat();
// Dog.coordx = 10
// Dog.coordy = 20
Dog.setcoordx_y(50, 20);
// console.log(Dog.getcoordx_y)
Dog.ReturnToOwner();
