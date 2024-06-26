require('dotenv').config();
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello World!')
});
app.get('/login',(req,res)=>{
    res.send('<h1>Login page</h1>');
});
app.get('/github',(req,res)=>{
    res.json(
        {
            user: "sunny",
            age: 24
        }
    );
});
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${process.env.PORT}`);
})