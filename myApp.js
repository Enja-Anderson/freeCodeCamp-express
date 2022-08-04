let express = require('express');
let app = express();






let absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});


let stylePath = __dirname + "/public";

app.use("/public", express.static(stylePath));


























 module.exports = app;
