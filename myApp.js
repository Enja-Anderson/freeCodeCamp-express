let express = require('express');
let app = express();
let absolutePath = __dirname + "/views/index.html";
let stylePath = __dirname + "/public";
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/name", (req, res) => {
    res.json({name: req.body.first + " " + req.body.last});
  });

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.id);
    next();
})

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});



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

app.get("/name", (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    var {first: firstName, last: lastName} = req.query;
    res.json({name: `${firstName} ${lastName}`});
});


















 module.exports = app;
