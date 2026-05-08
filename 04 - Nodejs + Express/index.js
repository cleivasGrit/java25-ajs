import express from "express";

const PORT = 3000;
const app = express();
// console.log(app);

app.use( express.json() );

const cats = [
    {
        name: 'Mjau',
        id: 231,
        isLost: true
    },
    {
        name: 'Pudding',
        id: 123,
        isLost: true
    },
    {
        name: 'Nero',
        id: 3443,
        isLost: true
    }
]

app.get('/cats', (req, res)=>{
    res.json(cats);
})

app.get('/cats/id/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id);

    const cat = cats.find(cat => cat.id == id);
    console.log(cat);
    if(cat){
        res.json(cat);
    }
    else{
        res.status(404);
        res.json({message: 'Cat not found in database.'});
    }
})

app.post('/cats', (req, res)=>{
    console.log(req.body);
    const {name} = req.body;

    if(name){
        const newCat = {
            name,
            isLost: true,
            id: Math.ceil(Math.random()*1000000)
        }
        cats.push(newCat);
        res.json(newCat);
    }
    else{
        res.status(400);
        res.json({message: 'Wrong format. Make sure to add a name.'})
    }
});

app.patch('/cats/id/:id', (req, res)=>{
    const {id} = req.params;
    const {isLost} = req.query;

    const catToUpdate = cats.find(cat => cat.id == id );
    if(catToUpdate){
        if(isLost){
            catToUpdate.isLost = isLost;
            res.json(catToUpdate);
        }
        else{
            res.status(400);
            res.json({message: 'Wrong format.'})
        }
    }
    else{
        res.status(404);
        res.json({message: 'Cat not found'});
    }

})

app.delete('/cats/id/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id);

    const catIndex = cats.findIndex(cat => cat.id == id);
    console.log(catIndex);
    if(catIndex>-1){
        cats.splice(catIndex, 1)
        res.json({message: `Cat with id ${id} is removed`});
    }
    else{
        res.status(404);
        res.json({message: 'Cat not found in database.'});
    }
})

// app.get('/', (req, res)=>{
//     res.send(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Min Express App</title>
//         </head>
//         <body>
//             <h1>Hej från Express!</h1>
//             <p>Ändrar jag något här...</p>
//         </body>
//         </html>
// `)
// })

// app.get('/json/:id/demo/:type', (req, res)=>{
//     console.log(req.body); //I postman las denna info till i bodyn i json-format
//     console.log(req.query);//I postman kommer dessa från query params i urlen, dessa kommer alltid sist
//     console.log(req.params)//Egenskapen kommer från :id här i express, värdet kommer från url från postman

//     res.json({message: 'Get request to /json received'});
// })


app.listen(PORT, ()=>{
    console.log('Listening on port', PORT)
})