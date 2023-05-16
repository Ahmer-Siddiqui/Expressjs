const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public') 

app.set('view engine','ejs');

app.get('/about',(req, res)=>{
    res.sendFile(`${publicPath}/about.html`)

})
app.get('/home',(req, res)=>{
    res.sendFile(`${publicPath}/home.html`)

})
app.get('/profile',(req, res)=>{
    const user = {
        name: "ahmer aqeel",
        email: "siddiquiahmer970@gmail.com",
        city: "karachi",
        skills: ['php','js','c++']
    }
    res.render('profile',{user})

})
app.get('*',(req, res)=>{
    res.send(`404 Error`)

})

app.listen(5000);