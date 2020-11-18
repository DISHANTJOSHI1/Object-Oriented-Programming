var player = /** @class */ (function () {
    function player() {
    }
    player.prototype.greet = function () {
        console.log('Hello, My name is ' + this.name);
    };
    return player;
}());
var mario = new player(); // this is the instances of the original or the super class. new keyword is used to create instance or the blueprint of the class.
mario.health = 10; //accessing the properties of the super class is mario object
mario.speed = 1;
mario.name = 'mario';
mario.isInvincible = true;
mario.greet(); //accessing the method  
var peach = new player();
peach.health = 7;
peach.speed = 1;
peach.name = 'peach';
peach.isInvincible = true;
peach.greet();
