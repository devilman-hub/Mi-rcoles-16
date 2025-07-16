import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './config/routes.js'

//Middleware

const app = express()
const corsOptions = {
    origin: '*'
}
app.use(bodyParser.urlencoded({ extended: true })) //Identificar la Ruta.
app.use(bodyParser.json()) //Descomprimir JSON.
app.use('/api',cors(corsOptions), routes) //Ruta de la API.
app.get('/', (req, res)=>res.send('¡Welcome to Adopt Me!')) //Escucha el Puerto.
const server= app.listen(process.env.PORT || 8000,()=>{
    console.log(`http://localhost:${server.address().port}`)
})

export default app