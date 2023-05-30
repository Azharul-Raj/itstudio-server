import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRouter from '../routes/useRoutes'

dotenv.config()

const app=express();
app.use(cors({credentials:true}));
app.use(express.json());

const port=process.env.PORT || 3001;

app.use('/users',userRouter)

// run mongodb 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dnsrj7s.mongodb.net/itstudio`,{
    
})
.then(()=>{
    console.log('Database connected')
    app.listen(port,()=>{
        console.log(`Server is running at ${port}`);
    })
})
.catch(err=>console.log('Something went wrong.',err?.message))
