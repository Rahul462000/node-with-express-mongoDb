import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const portNumber = 3000;
var fullInformation = "";

// login middleware
app.use(bodyParser.urlencoded({ extended: true }));

// this fucntion is the custom middleware that run before the HTTP request
function logger(req, res, next) {
  console.log(req.body);
  // this will
  fullInformation = req.body["userName"] + req.body["Email"];
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1> 
  <h2> ${fullInformation}✌️</h2>`);
});

app.listen(portNumber, () => {
  console.log(`listening on port ${portNumber}`);
});
