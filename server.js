import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'
import usersRouter from './src/routes/userRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', usersRouter)
dotenv.config()
const server = createServer(app)

server.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en ${process.env.PORT}`)
})
