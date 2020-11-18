var bird = /** @class */ (function () {
    function bird() {
    }
    bird.prototype.setName = function (newname, newage) {
        this.name = newname;
        this.age = newage;
    };
    bird.prototype.getName = function () {
        return this.name, this.age;
    };
    return bird;
}());
//     constructor(pname:string, page:number){
//         this.name=pname
//     }
//     getbird(){
//         console.log(this.name , this.age)
//     }
// }
// const pigeon = new bird('Ramlal', 7);
// pigeon.getbird()
var parrot = new bird;
parrot.setName('Ramlal', 10);
console.log(parrot.getName());
