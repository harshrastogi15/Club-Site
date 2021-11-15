const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/:site", (req, res) => {
  var site = req.params.site;
  if (site == "coding") res.render("coding.ejs");
  else if (site == "web") res.render("web.ejs");
  else if (site == "ai") res.render("ai.ejs");
  else if (site == "robotics") res.render("robotics.ejs");
  else if (site == "blockchain") res.render("blockchain.ejs");
  else if (site == "cyber") res.render("cyber.ejs");
  else if (site == "cloud") res.render("cloud.ejs");
  else if (site == "electronics") res.render("electronics.ejs");
  else if (site == "automation") res.render("automation.ejs");
  else res.render("index.ejs");
});

app.listen(process.env.PORT || 5000, process.env.IP, () =>
  console.log("Server is Running at PORT 5000....")
);
