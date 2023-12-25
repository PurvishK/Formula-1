const express = require('express');
const axios = require('axios');
const fs = require('fs');
const XMLtoJSON = require('xml2js');
const parser = new XMLtoJSON.Parser();
const app = express();
const PORT = 8842;

app.get('/getAllDrivers',async (req,res)=>{
    console.log("In get All Drivers");
    let allDriverXML = await axios.get('http://ergast.com/api/f1/2023/drivers');
    let allDriversJson;
    parser.parseString(allDriverXML.data.trim(),(err,res)=>{
        if(err){
            console.log("error in XML to JSON Conversion\n",err);
        }else {
            allDriversJson = (JSON.stringify(res));
        }
    })
    console.log(allDriversJson);
    res.send(allDriversJson);
});

app.listen(PORT, ()=>{
    console.log("Running server in ", PORT);
});

