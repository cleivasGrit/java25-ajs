export class Book{
    public readonly title: string;
    private currentPage: number;
    private borrower: string;

    constructor(title:string, borrower: string){
        this.title = title;
        this.borrower = borrower;
        this.currentPage = 0;
    }

    setBorrower(name: string){
        this.borrower = name;
        console.log('New borrower set: ', this.borrower);
    }

    // setTitle(title: string){
    //     this.title = title;
    // }

    turnPage(){
        this.currentPage++;
    }
    getCurrentPage(){
        return this.currentPage;
    }
}