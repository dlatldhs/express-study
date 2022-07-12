const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!!!!!!')
})

app.get('/hi', function (req, res) {
    res.send('hi my name is Im Si On!')
  })

app.get('/bye', function (req, res) {
    res.send('Good bye~')
  })

app.get('/testing', function (req, res) {
    res.send('Good testing!')
  })
  

app.listen(3000,()=>{
    console.log('server start!!')
})