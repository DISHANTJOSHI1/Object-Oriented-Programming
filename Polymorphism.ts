class Hero{          //Hero classs tells us, every subclass who extends from me would have my instance variables and methods.
    hunger: number 
    power: number 

    attach(){
        console.log('I am attacking.')
    }
    move(){
        console.log('I am Moving.')
    }
    eat(){
        console.log('I am eating.')
    }
}

class Knight extends Hero{
    shield: number;
    attach(){
        super.attach()
        console.log('Protecting the king')
        this.shield-=1
    }
}

class Archer extends Hero{
    arrow: number
    attach(){
        super.attach();
        console.log('Firing an arroow');
        this.arrow-=1;
    }
}
class Runner extends Hero{
    steps: number;
    attach(){
        super.attach()
        console.log('Kicking Enemies')
        this.steps-=1
    }
}


const knight = new Knight()
const archer = new Archer()
const runner = new Runner()


knight.attach()
archer.attach()
runner.attach()

