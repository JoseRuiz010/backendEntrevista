const express = require('express');
const app = express()
const morgan = require('morgan');
const {PrismaClient}= require('@prisma/client')
const prism= new PrismaClient()
const cors= require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.set('port',process.env.PORT || 3000 );
app.set('json spaces',2)
app.use(cors())

//Routes
const home=require('./routes/index')
const persona=require('./routes/routePersona')
const pregunta=require('./routes/routerPregunta')
const entrevistador=require('./routes/routerEntrevitador')
const entrevistado=require('./routes/routerEntrevistado')
const modeloEntrevista=require('./routes/routermodeloentrevista')
 app.use('/home',home);
 app.use('/persona',persona);
 app.use(pregunta);
 app.use(entrevistador);
 app.use(entrevistado);
 app.use(modeloEntrevista);


//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req,res)=>{
    res.json({
        'title': 'Hola mundo'
    });
})

app.get('/todo',async (req,res)=>{
    const result= await prism.todo.findMany()
    res.json(result);
})

app.post('/todo', async (req,res)=>{
    console.log(req.body);
    const {title}=req.body
   const result= await prism.todo.create({
        data:{
            descripcion:title
        }
    })
    res.json(result)
})

app.listen(app.get('port'), ()=>{
    console.log(`Server listenes on port ${app.get('port')}`);
})