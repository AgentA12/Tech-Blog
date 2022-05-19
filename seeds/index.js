const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedComments = require("./comments-seeds");
const seedPosts = require("./posts-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

  process.exit();
};

seedAll();
