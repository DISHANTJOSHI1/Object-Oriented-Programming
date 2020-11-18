class animal{           // Inheritence is used to avoid code duplication
    hunger: number
    health: number
    // coordx: number
    // coordy: number

    protected coordx: number   //Protected is key similar to private except protected can be accessed by subcalsses
    protected coordy: number   // and private can't be accessed by subclass. 
     
    setcoordx_y(x:number, y:number){
       this.coordx = x;
       this.coordy = y;
    }
    
    //Here we don't need geter method as we are calling returntoOwner method in Dog class which works as a getter in itself to call setcoordx_y;
    
    // getcoordx_y(){
    //     return this.coordx, this.coordy;
    // } 

    eat(){
        console.log('I am eating')
    }
    sleep(){
        console.log('I ma sleeping')
    }
    move(){
        console.log('I am moving')
    }
    makenoice(){
        console.log('I am making noice')
    }
}

class cat extends animal{}

class dog extends animal{
    eat(){
        console.log('Not Hungry')
    }
    ReturnToOwner(){
        console.log('This is my X coordinate '+this.coordx, 'and Y coordinate '+this.coordy)
    }
}

const Dog = new dog()
const Cat = new cat()

Cat.eat()
Dog.eat()
// Dog.coordx = 10  // this is when the cordx & coordy is public
// Dog.coordy = 20
Dog.setcoordx_y(50,20)
// console.log(Dog.getcoordx_y)
Dog.ReturnToOwner()