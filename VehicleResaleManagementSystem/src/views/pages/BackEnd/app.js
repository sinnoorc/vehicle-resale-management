const { urlencoded } = require('express')
const express =require('express')
const mongoose=require('mongoose')

const url="mongodb+srv://Umadevi:262000@cluster0.ojnurx7.mongodb.net/?retryWrites=true&w=majority"

const app=express()  

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

async function connect() {
    await mongoose.connect(url)
    console.log('connected...')
}

connect();

app.use(express.json())
app.use(express.urlencoded({extended:false}));

const alienRouter=require('./routers/aliens')
app.use('/aliens',alienRouter)

app.listen(9000,() => {
    console.log('server started');
})