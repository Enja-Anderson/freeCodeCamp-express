let express = require('express');
let app = express();


app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.id);
    next();
})



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

  app.get("/now",(req, res, next) => {
    req.time = new Date().toString();
    next()
  }, (req, res) => {
    res.send({time: req.time});
  });

  app.get("/:word/echo", (req, res) => {
    res.send({echo: req.params.word});
  });




















 module.exports = app;
