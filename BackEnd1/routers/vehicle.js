const express = require('express')
const router =express.Router()
const Vehicle=require('../models/vehicles')


router.get('/:id',async(req,res)=>{
    try{
            const vehicles=await Vehicle.findById(req.params.id)
            res.json(vehicles)
    }catch(err){
        res.send('Error'+err)
    }
})
router.delete('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.deleteMany()
        res.json(vehicles)
    } catch (err) {
        res.send('Error' + err)
    }
})
router.get('/findAll', async (req, res) => {
 

       try {
           const vehicle = await Vehicle.find({})
           console.log(vehicle)
        res.json(vehicle)
    } catch (err) {
        res.send('Error ' + err)
    }
})
router.post('/',async(req,res) => {
    console.log('Body:',req.body);
    const vehicles=new Vehicle({
       ...req.body
    })

    try{
        const a1=await vehicles.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const vehicles=await Vehicle.findById(req.params.id)
        vehicles.sub=req.body.sub
        const a1=await vehicles.save ()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


module.exports=router