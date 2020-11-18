//###### Objects ########

// let info:{name: string,age:number} = {
//     name  : 'Dishant';
//     age   :  22
// }

//####### Function #######
type BankAccount = {money:number, deposit:(val:number)=>void }; 

let bankAccount:  BankAccount = {
    money: 2000,
    deposit(value){
        this.money += value;
    }
};

let myself:{name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports','Cooking']
};

myself.bankAccount.deposit(3000);
console.log(myself);