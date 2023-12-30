/** @format */

const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const axios = require("axios");
///////////////////////////////
const f1ControllerFile = require("./Controllers/f1_controller");
const f1Controller = new f1ControllerFile();
//////////////////////////////
const PORT = 8842;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
	}
});

//////////////////////////////////////


// app.get("/",(req,res)=>{
//     res.status(200).sendFile(path.join(__dirname, '/index.html'));
// })

///////////////////////////////////
app.get("/getAllDrivers", async (req, res) => {
	console.log("In get All Drivers");
	let allDriverXML = await axios.get("http://ergast.com/api/f1/2023/drivers");
	const allDriversJson = f1Controller.xmlJson(allDriverXML.data.trim());

	console.log(allDriversJson);
	res.send(allDriversJson);
});

io.on("connection", (socket) => {
	console.log("User ", socket, " logged in..");
});

///////////////////////////////////
server.listen(PORT, () => {
	console.log("Running server in ", PORT);
});
