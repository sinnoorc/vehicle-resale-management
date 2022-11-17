const { urlencoded } = require('express')
const express =require('express')
const mongoose=require('mongoose')
const alienRouter=require('./routers/aliens')
const url="mongodb+srv://Umadevi:262000@cluster0.ojnurx7.mongodb.net/?retryWrites=true&w=majority"
const cors=require('cors')
const app=express()  
app.use(cors())
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

async function connect() {
    await mongoose.connect(url)
    console.log('connected...')
}

connect();

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use('/aliens',alienRouter)

app.listen(9000,() => {
    console.log('server started');
})