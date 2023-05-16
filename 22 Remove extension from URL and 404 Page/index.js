const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public') 

app.get('/about',(req, res)=>{
    res.sendFile(`${publicPath}/about.html`)

})
app.get('/home',(req, res)=>{
    res.sendFile(`${publicPath}/home.html`)

})
app.get('*',(req, res)=>{
    res.send(`404 Error`)

})

app.listen(5000);