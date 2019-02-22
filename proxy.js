const express = require("express");
const parser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3001;

//middleware
app.use(morgan("dev"));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//serve up static files
app.use(express.static(path.join(__dirname, "./public")));

app.listen(port, err => {
  if (err) {
    return console.log(err);
  }
  console.log(`Listening on ${port}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
