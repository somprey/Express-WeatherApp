const express = require('express');
const request = require('request');
require('dotenv').config();

const port = process.env.PORT
const app = express(); 

app.get('/getWeather/:location', (req, res) => {
    const location = req.params.location
   // console.log(process.env.API_URL+location+'&units='+process.env.API_UNIT+'&APPID='+process.env.API_KEY);
    request(process.env.API_URL+location+'&units='+process.env.API_UNIT+'&APPID='+process.env.API_KEY, 
    (err, req, body) => {
        if(!err ){
            res.send(body)
        }
    })
    
    
})



app.listen(port, (req, res) => { console.log('the server has started ')})