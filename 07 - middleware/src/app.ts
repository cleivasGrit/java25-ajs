import express, {Request, Response, NextFunction } from 'express';
import { commentRouter } from './commentroutes';
import { userRouter } from './userroutes';

export const app = express();
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);



/** MIDDLEWARES */
// Middleware som loggar något
const logInfo = (req: Request, res: Response, next: NextFunction)=>{
    console.log('En ny request', req.method, req.path);
    // req.test = 'Detta är bara för att testa';
    next();
}

app.use(logInfo); //Ordningen spelar roll, middlewaren används ej på de requests som använder router ovan.

app.get('/', (req:Request, res:Response)=>{
    res.json({message: 'GET /',
        // test: req.test
    });
})
app.get('/users', (req:Request, res:Response)=>{
    res.json({message: 'GET /users'});
})
app.post('/', (req:Request, res:Response)=>{
    res.json({message: 'POST /'});
})