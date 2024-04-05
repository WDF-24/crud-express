const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const apiRouter = require('./routes')

app.use(cors())
app.use(express.json())

app.use('/api', apiRouter)

app.get('/', (req,res)=>{
    res.send('Hola mundo, estoy vivo')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})
