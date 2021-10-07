const Menu = require("./model/menu.model");
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
    // console.log(req.body);
    const title = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const menu = new Menu(title, price, description, imageLink, null);

    menu
        .addMenu()
        .then((result) => {
            // console.log("Post req done");
            res.send("<h1>Added Menu Successfully</h1>");
            // res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.deleteMenu = (req, res, next) => {
    const menuId = req.body.menuId;
    Menu.deleteMenu(menuId)
        .then(() => {
            console.log("Deleted Product");
            res.send("<h1>Product Deleted</h1>");
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
            res.send("<h1>Found the Menu Item");
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