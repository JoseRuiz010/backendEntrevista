var express = require('express');
var router = express.Router();

const {
    PrismaClient
} = require('@prisma/client')
const prism = new PrismaClient()

router.get('/pregunta', async (req, res) => {
    const preguntas = await prism.pregunta.findMany()
    res.send(preguntas)
})

router.post('/pregunta', async (req, res) => {
    console.log(req.body);
    const {
        descripcion
    } = req.body
    const result = await prism.pregunta.create({
        data: {
           descripcion:descripcion,
           
        }
    })
    res.json(result)
})



module.exports = router