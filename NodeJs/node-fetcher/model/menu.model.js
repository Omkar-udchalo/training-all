const getDb = require("../mongo").getDb;
const mongodb = require("mongodb");

class Menu {
    constructor(title, price, description, imageUrl, id) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this._id = id ? new mongodb.ObjectId(id) : null;
    }

    addMenu() {
        const db = getDb();
        return db
            .collection("menu")
            .insertOne(this)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    static deleteMenu(menuId) {
        const db = getDb();
        return db
            .collection("menu")
            .deleteOne({ _id: new mongodb.ObjectId(menuId) })
            .then((result) => {
                console.log("Deleted");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static findById(menuId) {
        const db = getDb();
        return db
            .collection("menu")
            .find({ _id: new mongodb.ObjectId(menuId) })
            .next()
            .then((menu) => {
                // console.log(menu);
                return menu;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    updateMenu() {
        // console.log("new menu ", this);
        const db = getDb();
        return db
            .collection("menu")
            .updateOne({ _id: this._id }, { $set: this })
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = Menu;