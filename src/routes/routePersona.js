var express = require('express');
var router = express.Router();

const {PrismaClient}= require('@prisma/client')
const prism= new PrismaClient()

router.get('/pregunta',async(req,res)=>{
  const personas= await prism.persona.findMany()
    res.send(personas)
})

router.post('/new', async (req,res)=>{
    console.log(req.body);
    const {nombre, apellido,email,telefono,direccion}=req.body
    const result= await prism.persona.create({
         data:{
             name:nombre,
             apellido:apellido,
             email:email,
             telefono:telefono,
             direccion:direccion
         }
     })
    res.json(result)
})



module.exports = router