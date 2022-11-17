const mongoose=require('mongoose')


const alienSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    Address1:{
        type:String,
        require:true
    },
    Address2:{
        type:String,
        require:true
    },
    Dis:{
        type:String,
        require:true
    },
    PhNo:{
        type:Number,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    ConfirmPassword:{
        type:String,
        require:true
    }

})

module.exports=mongoose.model('Alien',alienSchema)