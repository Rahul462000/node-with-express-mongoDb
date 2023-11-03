import express from "express";
const app = express();
const portNumber = 3000;

app.get("/", (req, res) => {
  //return all request from browser
  //   console.log(req);
  //   give info of website origin and port number
  //   console.log(req.rawHeaders);
  res.send("this is home Page");
});
app.get("/about", (req, res) => {
  res.send("<h1>This is About page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>This is Contact page</h1>");
});
app.listen(portNumber, () => {
  console.log(`application listening on port ${portNumber}`);
});
