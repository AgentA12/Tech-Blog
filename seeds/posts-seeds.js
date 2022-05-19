const sequelize = require("../config/connection");
const Post = require("../models/post");

const postData = [
  {
    post_title: "mysql",
    post_body:
      "Quisque consequat sodales massa a semper. Suspendisse nec placerat magna. Pellentesque nunc nibh, pellentesque non dictum sed, molestie at tortor. Cras non scelerisque purus, et suscipit libero. Mauris tristique odio enim, non molestie nunc pellentesque at. Vivamus quis semper risus. Etiam sit amet massa metus. ",
    user_id: 1,
  },
  {
    post_title: "MVC",
    post_body:
      "Morbi sed lectus rutrum, mollis leo eu, sollicitudin odio. Fusce vitae pharetra ante. Mauris blandit massa a molestie vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultrices, risus hendrerit euismod ultricies, odio ligula efficitur enim, eu bibendum eros quam a tortor.",
    user_id: 2,
  },
  {
    post_title: "NODE.JS",
    post_body:
      "Nunc aliquet turpis non eleifend tristique. Suspendisse iaculis, massa vel eleifend viverra, lacus ipsum laoreet felis, sit amet aliquam dolor est sed ante. Quisque neque odio, molestie vel orci porta, rhoncus cursus magna. Aenean sit amet ex id sapien malesuada tempor quis molestie tortor. Fusce hendrerit, neque at tristique consectetur, ligula magna imperdiet dui, eu semper mi orci eget nisi.",
    user_id: 3,
  },
  {
    post_title: "CSS",
    post_body:
      "Proin vitae nisi a turpis mattis blandit eget at enim. Fusce elit erat, varius non hendrerit eget, placerat ac ex. Nulla vel cursus mi. Sed vitae elementum erat. Duis quis eros finibus, euismod arcu ac, finibus risus. Vestibulum nec mollis lectus. Vestibulum et erat nec nibh finibus pulvinar et nec lectus.",
    user_id: 4,
  },
  {
    post_title: "Javascript",
    post_body:
      " Vestibulum nec mollis lectus. Vestibulum et erat nec nibh finibus pulvinar et nec lectus.Fusce hendrerit, neque at tristique consectetur, ligula magna imperdiet dui, eu semper mi orci eget nisi.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
