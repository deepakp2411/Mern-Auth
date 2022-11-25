import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import connectDB from './db/connectdb.js'
import webRoutes from './routes/webRoute.js'


const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL



// middlewares 
app.use(cors())
app.use(express.json())





// routes 
app.use('/user',webRoutes)

// db 
connectDB(DATABASE_URL)

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})