// Variabler
let num = 27;

num = 'test';
console.log(num); //'test' loggas fortfarande


let word:string;
word = 'hej';
// word = true;
console.log(word)

let nums:number[];
nums = [3, 4, 2, 1];
nums.push('test');
nums = [3, 2, 'test', 2];

// Funktioner

const add = (x:number, y:number) =>{
    return x+y;
}
console.log(add(4, 3))

const mult = (x:number, y:number=10)=>{
    return x*y;
}
console.log(mult(4))

function callback(text:string){
    console.log(text);
}


function higherOrder(func:Function){
    func('Hallå, hej!');
}
higherOrder(callback);
// higherOrder('callback'); //I detta fall ett runtime Error 

// Union types
let mynt: 'krona'|'klave';
mynt = 2;
mynt = 'sdfs';
mynt = 'krona';
mynt = Math.random()>0.5 ? 'krona':'klave';
console.log(mynt);

let status: 1|2|3|boolean|Object;

status = true;
status = 2;
console.log(status);

// Type aliases
type Coin = 'krona'|'klave';
let mynt2:Coin = 'krona';
mynt = mynt2;

function flipCoin(): Coin {
    return Math.random()<0.5 ? 'klave':'krona';
}
console.log(flipCoin())

type Unit = 'cm'|'inch';
type Measurements = [number, number, number, Unit ];
let boxSize:Measurements = [20, 400, 78, 'cm'];
// boxSize.push(3);
console.log(boxSize)

// type User = {
//     username: string,
//     birthYear: number,
//     isUnderAged: Function,
//     hasFreckles?: boolean
// };

// const user1:User = {
//     username: 'princess',
//     birthYear: 1955,
//     isUnderAged():boolean{
//         return (new Date().getFullYear()-this.birthYear)<18;
//     }
// }

// console.log(user1.isUnderAged())

let date:Date; //Date är ett inbyggt interface

// Interfacet Promise med utbytbar typ för async functions
type User = {
    id: number,
    username: string,
    email: string
}

async function fetchUsers():Promise<User[]> {
    const url = 'https://dummyjson.com/users';
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    const users:User[] = data.users.map( ({id, username, email}:User)=> ({id, username, email})  );

    return users;
}

function logUser(users: User[]){
    users.forEach( user => console.log(user))
}

fetchUsers().then( logUser );