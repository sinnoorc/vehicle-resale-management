const mongoose=require('mongoose')


const vehicleSchema=new mongoose.Schema({

    OwnName:{
        type:String,
        require:true
    },
    OwnAd1:{
        type:String,
        require:true
    },
    Ownad2:{
        type:String,
        require:true
    },
    OwnDis:{
        type:String,
        require:true
    },
    OwnPhno:{
        type:String,
        require:true
    },
    OwnEmail:{
        type:String,
        require:true
    },
    car:{
        type:String,
        require:true
    },
    bike:{
        type:String,
        require:true
    },
    VehiNo:{
        type:String,
        require:true
    },
    VehiBrand:{
        type:String,
        require:true
    },
    VehiModel:{
        type:String,
        require:true
    },
    VehiLocation:{
        type:String,
        require:true
    },
    VehiOwn:{
        type:String,
        require:true
    },
    VehiFuel:{
        type:String,
        require:true
    }

})

module.exports=mongoose.model('vehicle',vehicleSchema)