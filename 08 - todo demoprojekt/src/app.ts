/**
 * I denna fil hittar ni själva express-appen. Här sätter vi upp alla routes och middlewares.
 */

import express, {Response, Request, NextFunction} from "express";
import path from "path";
import { pageRouter } from "./routes/page.route";
import { todoRouter } from "./routes/todo.route";

export const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, "../public"))); //för att kunna serva statiska filer


app.use('/api/todos', todoRouter);
app.use('/', pageRouter)

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../public/404.html"));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});