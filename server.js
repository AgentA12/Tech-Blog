const express = require("express");
const app = express();
const path = require("path");
const router = require("./controllers/index");
const sequelize = require("./config/connection");
const bcrypt = require("bcrypt");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//start express-handlebars
const { engine } = require("express-handlebars");
const { json } = require("express/lib/response");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

//use routers and allow static html and css from public folder

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(router);

const sess = {
  //using hash based auth, male use the cookie wasnt modifyed
  secret: "Super secret secret",
  //
  cookie: {},
  //
  resave: false,
  //saved as part of the "store"
  saveUninitialized: true,
  //connect with the database and save the session
  store: new SequelizeStore({
    db: sequelize,
  }),
};
//call the session middlware
app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("Now listening"));
});
