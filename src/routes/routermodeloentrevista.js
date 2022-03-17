var express = require('express');
var router = express.Router();

const {
    PrismaClient
} = require('@prisma/client')
const prism = new PrismaClient()

router.get('/modeloEntrevista', async (req, res) => {
    const preguntas = await prism.modeloEntrevista.findMany({
        include:{
            preguntas:true
        }
    })
    res.send(preguntas)
})
 
router.post('/modeloEntrevista', async (req, res) => {
    console.log(req.body);
    const {
        name
    } = req.body
    const result = await prism.modeloEntrevista.create({
        data: {
            name:name,
            preguntas:{
                connect:[{id:1},{id:2}]
            }
        }
    })
    res.json(result)
})



module.exports = router