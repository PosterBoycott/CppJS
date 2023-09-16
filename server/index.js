import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({limit:"30mb", extende: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extende: true}))
app.use(cors())

app.use('/posts', postRoutes)

const PORT = process.env.PORT || 3000

mongoose.connect(CONNECTION_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
