import express, {Express,Request, Response} from 'express';

const app:Express=express();
const PORT=process.env.PORT || 3000;

app.get('/', (req:Request,res:Response)=>{
    res.send('Hello from TypeScript Express Server');

});

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT} `)
})