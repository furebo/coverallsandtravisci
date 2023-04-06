import express from 'express';
import sum from './aboutnumbers.js';
const app = express();

//app.get('/home',sum);

app.listen(5000, ()=>{
    console.log("Application is running on port 5000 !");
})

module.exports = app;
