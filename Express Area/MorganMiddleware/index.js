import express from "express";
import morgan from "morgan";

const app = express();
const portNumber = 3000;
// here morgan is a custom middleware that will run before the res.end() method
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(portNumber, () => {
  console.log(`listening on port ${portNumber}`);
});
