const sequelize = require("../config/connection");
const User = require("../models/user");

const userData = [
  {
    username: "agentO",
    password: "password12",
  },
  {
    username: "bluekitten",
    password: "secretpassword",
  },
  {
    username: "zeett",
    password: "securepassword1",
  },
  {
    username: "SPK",
    password: "mydogsname0",
  },
  {
    username: "whosthis",
    password: "myfavcolor11",
  },
];

const userSeeds = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = userSeeds;
