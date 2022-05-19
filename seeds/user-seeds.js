const sequelize = require("../config/connection");
const User = require("../models/user");

const userData = [
  {
    username: "agentO",
    password: "password12",
  },
  {
    username: "bluekitten",
    password: "password12",
  },
  {
    username: "zeett",
    password: "password12",
  },
  {
    username: "SPK",
    password: "password12",
  },
  {
    username: "whosthis",
    password: "password12",
  },
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;
