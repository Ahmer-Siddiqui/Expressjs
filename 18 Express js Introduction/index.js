const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello , this is Home Page")
})

app.get('/about',(req,res)=>{
    res.send("Hello , this is about Page")
})

app.listen(5000);