const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://user1:abcd1234@cluster0.v6cvj.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.listen(port, () => console.log(`Example app listening on port ${port}`))


