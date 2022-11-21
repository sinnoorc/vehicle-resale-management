const { urlencoded } = require('express')
const express =require('express')
const mongoose=require('mongoose')
//const alienRouter=require('./routers/aliens')
const vehiRouter=require('./routers/vehicle')
const url="mongodb+srv://Umadevi:262000@cluster0.ojnurx7.mongodb.net/?retryWrites=true&w=majority"
const app=express()  
const cors=require('cors')

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

app.use('/vehicle',vehiRouter)
//app.use('/vehi',vehiRouter)

app.listen(4000,() => {
    console.log('server started on port 4000');
})