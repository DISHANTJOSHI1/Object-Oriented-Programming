class bird{
    private name: string;  //private key will help to encapsulate any property/method of a super class so it can not be changed outside the class.
    private age: number;   // If we want to change it for some reasons we can use set and get method or by using a constructor.  
    bd:bird;

    setName(newname: string, newage:number) {
        this.name = newname
        this.age = newage
    }
    getName(){
        return this.name, this.age
    }
}

//     constructor(pname:string, page:number){
//         this.name=pname
//     }
//     getbird(){
//         console.log(this.name , this.age)
//     }
// }

// const pigeon = new bird('Ramlal', 7);
// pigeon.getbird()

const parrot = new bird;
parrot.setName('Ramlal', 10)
console.log(parrot.getName())