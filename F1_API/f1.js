const express = require('express');
const axios = require('axios');
const f1Controller = new require('f1_controller') ();
const fs = require('fs');
const XMLtoJSON = require('xml2js');
const parser = new XMLtoJSON.Parser();
const app = express();
const PORT = 8842;

app.get('/getAllDrivers',async (req,res)=>{
    console.log("In get All Drivers");
    let allDriverXML = await axios.get('http://ergast.com/api/f1/2023/drivers');
    const allDriversJson = f1Controller.xmlJson(allDriverXML.data.trim())

    console.log(allDriversJson);
    res.send(allDriversJson);
});

app.listen(PORT, ()=>{
    console.log("Running server in ", PORT);
});

