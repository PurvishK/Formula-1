/** @format */

const XMLtoJSON = require("xml2js");
const parser = new XMLtoJSON.Parser();

class F1Controller {
  constructor() {}

  singleSeasonDriverStanding(driversData) {
    return driversData.data.MRData.StandingsTable.StandingsLists[0][
      "DriverStandings"
    ];
  }
}

module.exports = F1Controller;
