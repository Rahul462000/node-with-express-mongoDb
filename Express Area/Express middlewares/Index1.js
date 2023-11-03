import bodyParser from "body-parser";
import express from "express";
// given below generate the path for the file
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirName = dirname(fileURLToPath(import.meta.url));
// generated paths ends here

const app = express();
const portNumber = 3000;

// here we are dealing with a html form so we use urlencoded method
app.use(bodyParser.urlencoded({ extended: true }));

// path of file to be send
app.get("/", (req, res) => {
  console.log(__dirName + "/public/Index.html");
  res.sendFile(__dirName + "/public/Index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(portNumber, () => {
  console.log(`listening on port ${portNumber}`);
});
