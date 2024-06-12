const express= require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

//Seteo de motor de platilla
app.set('view engine', 'ejs')

//seteo de carpeta public para archivos estáticos 
app.use(express.static('public'))

//para procesar datos enviados desde froms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteo de variables de entorno
dotenv.config({path: './env/.env'})

//para poder trabajar con las cookies 
app.use(cookieParser)

//llamar al router
app.use('/', require('./routes/router'))

app.listen(4000, ()=>{
    console.log('SERVER UP runnung in http://localhost:4000')
})