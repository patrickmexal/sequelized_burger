
var Sequelize = require("sequelize");
// sequelize (low-case) references our connection to the DB.
var sequelize = require("../config/connection.js");


var burgers = sequelize.define("burgers", {
 
  id: Sequelize.INTEGER,

  burger_name: Sequelize.STRING,
  // burger devoured?
  devoured: Sequelize.BOOLEAN
}, {
  timestamps: false
});

// Syncs with DB
Character.sync();

module.exports = burgers;