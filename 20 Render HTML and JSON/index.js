const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("<h1>Wedding</h1><h1>Alina Ahmer</h1>")
})

app.get('/about',(req,res)=>{
    res.send(`<input type='text' placeholder='User name' value="${req.query.name}"/><button>Click Me</button>`)
})

app.get('/help',(req,res)=>{
    res.send([{
        name:"Ahmer",age:28
    },
    {
        name:"Yahiya",age:23
    }])
})

app.listen(5000);