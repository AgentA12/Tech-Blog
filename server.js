const express = require("express");
const app = express();
const path = require("path");
const router = require("./controllers/index");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3306;

//start express-handlebars
const { engine } = require("express-handlebars");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

//use routers and allow static html and css from public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

sequelize.sync({ force: true }).then(() => {
  app.listen(3001, () => console.log('Now listening'));
});
