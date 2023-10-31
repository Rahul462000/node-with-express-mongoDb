// https module for making serve
const http = require("http");

const data = { age: 5 };

// res.end () is a method for sending data

// creating server
// and this callback funciton is called server
// this is a request function in the server
const server = http.createServer((req, res) => {
  // this is a request fucntion msg in the server
  console.log("server started");
  //   this is a header with header name and it's value
  res.setHeader("Dummy", "DummyValue");

  //   differnet type of data will have differnet content type
  //   given below is the type of sended data to server
  //   res.setHeader("Content-Type", "application/json");
  //   for html text type data
  res.setHeader("Content-Type", "text");

  //   it is a method for passing js objects in node servers
  //   res.end(JSON.stringify(data));
  //   now the response on the clint side
  res.end("hello everyone");
});
server.listen(8080);
