var express = require('express');
var router = express.Router();

const {
    PrismaClient
} = require('@prisma/client')
const prism = new PrismaClient()

router.get('/entrevistador', async (req, res) => {
    const preguntas = await prism.entrevistador.findMany(
        // {
        //     where:{
        //         id: 1,
        //     },
        //     include:{
        //         persona:true
        //     }
        // }
    )
    res.send(preguntas)
})

router.post('/entrevistador', async (req, res) => {
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