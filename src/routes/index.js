var express = require('express');
var router = express.Router();

const {PrismaClient}= require('@prisma/client')
const prism= new PrismaClient()

router.post('/about',(req,res)=>{
    res.send('About Page')
})

  

router.post('/tarea',async  (req,res)=>{
    console.log(req.body);
    const {title}=req.body
    const result= await prism.todo.create({
         data:{
             descripcion:title
         }
     })
    res.json('result')
})



module.exports = router