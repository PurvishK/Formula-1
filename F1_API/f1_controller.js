const XMLtoJSON = require('xml2js');
const parser = new XMLtoJSON.Parser();

class F1Controller {
    xmlJson(xmlData) {
        let allDriversJson;
        parser.parseString(allDriverXML.data.trim(),(err,res)=>{
            if(err){
                console.log("error in XML to JSON Conversion\n",err);
            }else {
                allDriversJson = (JSON.stringify(res));
            }
        })
        return allDriversJson;
    }
}