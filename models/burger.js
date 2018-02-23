// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var burgers = sequelize.define("burgers", {
  // the routeName gets saved as a string
  id: Sequelize.INTEGER,
  // the name of the burger
  burger_name: Sequelize.STRING,
  // burger devoured?
  devoured: Sequelize.BOOLEAN
}, {
  timestamps: false
});

// Syncs with DB
Character.sync();

module.exports = Character;