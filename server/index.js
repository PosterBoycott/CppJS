import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(bodyParser.json({limit:"30mb", extende: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extende: true}))
app.use(cors())

const PORT = process.env.PORT || 3000
const CONNECTION_URL = 'mongodb+srv://thinus1234:thinus1234@posterboy.dzzceor.mongodb.net/'

mongoose.connect(CONNECTION_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
