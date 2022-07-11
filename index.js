const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hi', function (req, res) {
    res.send('hi my name is Im Si On!')
  })
app.listen( 3000 ,()=>{
    console.log('server start!!');
} );