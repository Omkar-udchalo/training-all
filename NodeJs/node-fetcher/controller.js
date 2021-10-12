const bcrypt = require("bcryptjs");
const Menu = require("./model/menu.model");
const User = require("./model/user.model");

const getDb = require("./mongo").getDb;
exports.getAllMenu = (req, res, next) => {
    const db = getDb();
    db.collection("menu")
        .find()
        .toArray()
        .then((products) => {
            // console.log(products);
            // res.setHeader("application/json");
            res.json(JSON.parse(JSON.stringify(products)));
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.addMenu = (req, res, next) => {
    console.log(req.body);
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const imageLink = req.body.imageUrl;
    const menu = new Menu(title, price, description, imageLink, null);

    menu
        .addMenu()
        .then((result) => {
            // console.log("Post req done");
            res.json('message:"Added the menu"');
            // res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.deleteMenu = (req, res, next) => {
    console.log(req.body);
    const menuId = req.body.menuId;
    Menu.deleteMenu(menuId)
        .then(() => {
            console.log("Deleted Product");
            res.json({ message: "deleted item" });
        })
        .catch((err) => {
            console.log(err);
        });
};
exports.getMenuById = (req, res, next) => {
    const menuId = req.params.id;
    // console.log(menuId);
    Menu.findById(menuId)
        .then((result) => {
            // console.log(result);
            if (!result) {
                return res.redirect("/");
            }
            // console.log(result);
            res.json(JSON.parse(JSON.stringify(result)));
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.updateMenu = (req, res, next) => {
    const menuId = req.params.id;
    console.log(menuId);
    const newtitle = req.body.title;
    const newprice = req.body.price;
    const newdescription = req.body.description;
    const newimageLink = req.body.imageUrl;
    const idMenu = req.body._id;
    Menu.findById(menuId)
        .then((menu) => {
            if (menu) {
                console.log("old menu");
                console.log(menu);
                //create new menu object
                const newmenu = new Menu(
                    newtitle,
                    newprice,
                    newdescription,
                    newimageLink,
                    idMenu
                );

                newmenu
                    .updateMenu()
                    .then((result) => {
                        res.send("<h1>Successfully Updated</h1>");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                return res.send("<h1>Not FOund the Menu item</h1>");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.signUp = (req, res, next) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const passwordFromClient = req.body.password;
    const mobile = req.body.mobile;
    const cart = req.body.cart;
    const order = req.body.order;
    const role = req.body.role ? req.body.role : null;

    const password = bcrypt.hashSync(passwordFromClient, 8);
    // console.log(password);

    const user = new User(name, email, password, mobile, role, cart, order);

    user
        .saveUser()
        .then((result) => {
            res.json({ message: "User added" });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getUsers = (req, res, next) => {
    User.getAllUsers()
        .then((users) => {
            console.log(users);
            res.json(JSON.parse(JSON.stringify(users)));
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getUserById = (req, res, next) => {
    const menuId = req.params.id;
    User.getUserById(menuId)
        .then((user) => {
            res.json(JSON.parse(JSON.stringify(user)));
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.login = (req, res, next) => {
    // console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    User.findUserByEmail(email, password)
        .then((result) => {
            if (result._id) {
                return res.status(200).json(result);
            } else {
                return res.status(401).json({ message: result });
            }
            // console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.orderPost = (req, res, next) => {
    // console.log(req.body);

    User.getUserById(req.body._id)
        .then((user) => {
            if (user) {
                let currentOrder = req.body.order;
                user.order.unshift(currentOrder);
                console.log("old user data");
                console.log(user);
                //create new menu object
                // const newmenu = new Menu(
                //     newtitle,
                //     newprice,
                //     newdescription,
                //     newimageLink,
                //     idMenu
                // );

                // console.log(userOrder);
                let userOrder = new User(
                    user.name,
                    user.email,
                    user.password,
                    user.mobile,
                    user.role, [],
                    user.order
                );
                userOrder
                    .addToCart(req.body._id)
                    .then((result) => {
                        // return result;
                        res.json({ message: "Order Placed" });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                return res.send("<h1>Not FOund the Menu item</h1>");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};