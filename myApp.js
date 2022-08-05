let express = require('express');
let app = express();






let absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});


let stylePath = __dirname + "/public";

app.use("/public", express.static(stylePath));


//need to configure dotenv for this to work locally
//for freeCodeCamp challenge, a secret (hidden) variable was created in replit.com. key: MESSAGE_STYLE value: uppercase
app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }
  });






















 module.exports = app;
