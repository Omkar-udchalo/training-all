const express = require("express");
const path = require("path");
const controller = require("../controller");
const router = express.Router();

// Get all menus
router.get("/menu", controller.getAllMenu);

//Add menu
router.post("/add-menu", controller.addMenu);

// Del Menu
router.post("/delete-menu", controller.deleteMenu);

// Get by ID Menu
router.get("/menu/:id", controller.getMenuById);

// Update Menu
router.post("/update-menu/:id", controller.updateMenu);

exports.router = router;