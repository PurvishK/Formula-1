/** @format */

const XMLtoJSON = require("xml2js");
const parser = new XMLtoJSON.Parser();

class F1Controller {
	constructor() {}

	xmlJson(xmlData) {
		let allDriversJson;
		let allDriversJsonMain = [];
		parser.parseString(xmlData, (err, res) => {
			if (err) {
				console.log("error in XML to JSON Conversion\n", err);
			} else {
				allDriversJson = JSON.stringify(res);
				allDriversJson = JSON.parse(allDriversJson).MRData.DriverTable[0].Driver;
				allDriversJson.forEach((EachDriver)=>{
					allDriversJsonMain[`${EachDriver["GivenName"]}_${EachDriver["FamilyName"]}`] = EachDriver;
				});
			}
		});
		return allDriversJsonMain;
	}
}

module.exports = F1Controller;
