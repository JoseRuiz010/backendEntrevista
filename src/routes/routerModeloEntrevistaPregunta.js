var express = require('express');
var router = express.Router();

const {
    PrismaClient
} = require('@prisma/client')
const prism = new PrismaClient()

router.get('/entrevistapregunta', async (req, res) => {
    const preguntas = await prism.persona.findMany()
    res.send(preguntas)
})

router.post('/entrevistapregunta', async (req, res) => {
    console.log(req.body);
    const {
        legajo,
        personaId
    } = req.body
    const result = await prism.entrevistador.create({
        data: {
            legajo: legajo,
            personaId: personaId
        }
    })
    res.json(result)
})



module.exports = router