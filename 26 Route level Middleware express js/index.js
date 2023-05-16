const express = require('express')
const app = express();
const reqFilter = require('./middleware')
const route = express.Router();


// app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page')
})
app.get('/users',(req,res)=>{
    res.send('Welcome to Users Page')
})
route.get('/about',(req,res)=>{
    res.send('Welcome to about Page')
})
route.get('/contact',(req,res)=>{
    res.send('Welcome to contact Page')
})

app.use('/',route)

app.listen(5000)