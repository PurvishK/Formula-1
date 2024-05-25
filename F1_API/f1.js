/** @format */

const express = require("express");
const CORS = require("cors");
const path = require("path");
const axios = require("axios");
const f1ControllerFile = require("./Controllers/f1_controller");
const f1Controller = new f1ControllerFile();
const PORT = 3000;
const app = express();
const standardUrls = "http://localhost:3000";

app.use(CORS());

app.use("/api/", (req, res) => {
  let options = {
    method: req.method,
    url: standardUrls + req.url,
    body: JSON.stringify(req.body),
    headers: {
      "content-type": "application/json",
    },
  };
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error); // Send the error with a 500 status
    });
});

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

// SERVE STATUS FILES FROM "public" DIRECTORY
app.use(express.static(path.join(__dirname, "/public")));

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

///////////////////////////////////
app.listen(PORT, () => {
  console.log("Running server in ", PORT);
});
