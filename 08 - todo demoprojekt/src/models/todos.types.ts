/**
 * TS-typer för våra todos. 
 * Nya todos har inget ID eftersom det skapas i databasen.
 */
export type Todo = {
    id: number;
    task: string;
    done: boolean;  
}

export type newTodo = {
    task: string;
    done: boolean;  
};