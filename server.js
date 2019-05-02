const fs = require("fs");

fs.writeFile(__dirname + "/test.txt", "Hello\nworld", err => {
  err && console.log("There was an error");

  console.log("File was written");
});
