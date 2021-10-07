const menuController = require("../controller/menu.controller");

module.exports = (app) => {
    app.get("/menu", menuController.findAll);
};