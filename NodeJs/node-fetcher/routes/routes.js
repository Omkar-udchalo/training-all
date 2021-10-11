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

//SignUp form
router.post("/signup", controller.signUp);

//Get Users
router.get("/users", controller.getUsers);
//Get User by id
router.get("/user/:id", controller.getUserById);

//login
router.post("/login", controller.login);

//order
router.post("/order", controller.orderPost);

exports.router = router;