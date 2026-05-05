import {Book} from './Book';
import { Car } from './Car';

const book = new Book('As the willow tree', 'Clara');
const car = new Car('Volvo', '240', 1984);
console.log(car)

console.log(book);
console.log(book.title)
console.log(book.getCurrentPage())
// console.log(book.borrower) //Private

// book.title = 'något annat'; //readonly
// book.currentPage = 5; //private

book.setBorrower('Bea');

// Type assertion

type User = {
	name:string,
	age:number
};

const form = document.querySelector('#userForm') as HTMLFormElement;

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const name = (document.querySelector('#name') as HTMLInputElement).value; 


    const age = (document.querySelector('#age') as HTMLInputElement).value;
    
    // const age = Number((document.querySelector('#age') as HTMLInputElement).value); 

    // Värden från inputs är alltid String
    const user:User = {name, age: Number(age)};
    console.log(user)
})