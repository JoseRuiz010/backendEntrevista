var express = require('express');
var router = express.Router();

const {
    PrismaClient
} = require('@prisma/client')
const prism = new PrismaClient()

router.get('/entrevistado', async (req, res) => {
    const preguntas = await prism.entrevistado.findMany()
    res.send(preguntas)
})

router.post('/entrevistado', async (req, res) => {
    console.log(req.body);
    const {
        legajo,
        personaId
    } = req.body
    const result = await prism.entrevistado.create({
        data: {
             
            personaId: personaId
        }
    })
    res.json(result)
})



module.exports = router