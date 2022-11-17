const mongoose=require('mongoose')


const alienSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    ad1:{
        type:String,
        require:true
    },
    ad2:{
        type:String,
        require:true
    },
    district:{
        type:String,
        require:true
    },
    phNo:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    pass:{
        type:String,
        require:true
    },
    cPass:{
        type:String,
        require:true
    }

})

module.exports=mongoose.model('Alien',alienSchema)