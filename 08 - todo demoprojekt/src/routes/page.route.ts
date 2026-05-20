/**
 * Hit skickas alla requests som inte matchar någon av våra API-routes. Här skickar vi tillbaka vår index.html, dvs vår frontend.
 */
import { Router } from "express";
import path from "path";

export const pageRouter = Router();

pageRouter.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
})