/** @format */

const express = require("express");
const CORS = require("cors");
const path = require("path");
const axios = require("axios");
const f1ControllerFile = require("./Controllers/f1_controller");
const f1Controller = new f1ControllerFile();
const PORT = 8842;
const app = express();

app.use(CORS());

app.get("/getAllDrivers/:year", async (req, res) => {
  console.log("In get All Drivers");
  const year = req.params["year"];
  let allDriversJson = await axios.get(
    `http://ergast.com/api/f1/${year}/driverStandings.json`,
  );
  const seasonDriversStandings =
    f1Controller.singleSeasonDriverStanding(allDriversJson);
  res.status(200).send(seasonDriversStandings);
});

function returnData(x) {
  console.log("return data");
  return x;
}

///////////////////////////////////
app.listen(PORT, () => {
  console.log("Running server in ", PORT);
});
