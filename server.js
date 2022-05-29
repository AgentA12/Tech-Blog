const express = require("express");
const app = express();
const path = require("path");

const sequelize = require("./config/connection");
const bcrypt = require("bcrypt");

//setting up a session
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3306;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//start express-handlebars
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sess));

//use routers and allow static html and css from public folder
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(require("./controllers"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

//Things a learned with problems i ran into
//---an href on an achor tag AND document.location.replace both make a get request to the specified url endpoint---

//---when seeding with sequelize, make you have individualhooks set to true. this avoids having to loop through seeded data
