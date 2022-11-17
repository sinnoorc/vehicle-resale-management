const express = require('express')
const router =express.Router()
const Alien=require('../models/alien')


router.get('/:id',async(req,res)=>{
    try{
            const alien=await Alien.findById(req.params.id)
            res.json(alien)
    }catch(err){
        res.send('Error'+err)
    }
})

router.post('/',async(req,res) => {
    console.log('Body:',req.body);
    const alien=new Alien({
        name:req.body.RegName,
        Address1:req.body.add1,
        Address2:req.body.add2
    })

    try{
        const a1=await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id)
        alien.sub=req.body.sub
        const a1=await alien.save ()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


module.exports=router