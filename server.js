import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'

const app = express()

dotenv.config()
const server = createServer(app)

server.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en ${process.env.PORT}`)
})
