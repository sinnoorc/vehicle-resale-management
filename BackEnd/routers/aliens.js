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
router.delete('/', async (req, res) => {
    try {
        const alien = await Alien.deleteMany()
        res.json(alien)
    } catch (err) {
        res.send('Error' + err)
    }
})
router.get('/findAll', async (req, res) => {
 

       try {
           const aliens = await Alien.find({})
           console.log(aliens)
        res.json(aliens)
    } catch (err) {
        res.send('Error ' + err)
    }
})
router.post('/',async(req,res) => {
    console.log('Body:',req.body);
    const alien=new Alien({
       ...req.body
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