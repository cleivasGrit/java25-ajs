export class Car {
    //Ska inte kunna modifieras men ses utanför klassen
    public readonly make:string;
    public readonly model:string;
    public readonly year:number;

    //Ska varken kunna modifieras eller ses utanför klassen
    private readonly doorLockCode:number;

    constructor(make:string, model:string, year:number){
        this.make = make;
        this.model = model;
        this.year = year;


        //Koden genereras av en privat metod
        this.doorLockCode = this.generateDoorLockCode();
    }
    private generateDoorLockCode():number {
        return Math.round(Math.random() * 1000000);
    }
    //Publik metod som använder den privata koden
    public openAllDoors() {
        console.log('Opening with', this.doorLockCode);
    }
}


const car = new Car('Toyota', 'Corolla', 1999);
console.log(car.make, car.model, car.year);
car.openAllDoors();