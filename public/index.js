const express = require('express')
const bodyParser = require('body-parser')
const app = express()


bodyParser.urlencoded('true')
app.post("/tweet", function (request, response){
    console.log('/tweet post')
})

app.listen(3000)