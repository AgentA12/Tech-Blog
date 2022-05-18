const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const path = require("path");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.render("home");
});


app.listen(3001, () => {
  console.log("Server started on port", 3001);
});
