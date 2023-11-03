// creating a server with expressjs
// initialization of express
import express from "express";
const app = express();
const portNumber = 3000;

// a respose is sened to server side
app.get("/", (req, res) => {
  res.send("Welcome to express server");
});

// application is working at port numner 3000
app.listen(portNumber, () => {
  console.log(`server listening on port  ${portNumber}`);
});
