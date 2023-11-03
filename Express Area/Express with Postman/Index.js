import express from "express";
const app = express();
const portNumber = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcom to homePage</h1>");
});
app.post("/register", (req, res) => {
  // Do something with the data or get all the data
  res.sendStatus(201);
});
app.put("/user/singh", (req, res) => {
  // change all the data for the respective user made
  res.sendStatus(200);
});
app.patch("/user/singh", (req, res) => {
  // modified some of the data in the respective user made
  res.sendStatus(200);
});
app.delete("/user/singh", (req, res) => {
  // delete the user
  res.sendStatus(200);
});
app.listen(portNumber, () => {
  console.log(`application listening on port ${portNumber}`);
});
