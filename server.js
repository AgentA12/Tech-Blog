const express = require("express");
const app = express();
const path = require("path");
const router = require("./controllers/index");
const sequelize = require("./config/connection");
const bcrypt = require("bcrypt");

//setting up a session
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//start express-handlebars
const { engine } = require("express-handlebars");
const { json } = require("express/lib/response");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

//use routers and allow static html and css from public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("Now listening"));
});
