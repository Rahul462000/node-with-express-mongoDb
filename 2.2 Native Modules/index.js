const fs = require("fs");
// how to writw a file with nodejs file system
// fs.writeFile("message.txt", "hello from nodejs", (err) => {
//   if (err) throw err;
//   console.log("this file is being saved");
// });
// how to read a file with file system

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
