const express = require('express')
const app = express();

const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age")
    }
    else if(req.query.age < 18){
        res.send("not allow to access")
    }
    else{
        next()
    }
}

app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page')
})
app.get('/users',(req,res)=>{
    res.send('Welcome to Users Page')
})

app.listen(5000)