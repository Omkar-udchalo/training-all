const getDb = require("../mongo").getDb;
const mongodb = require("mongodb");
const bcrypt = require("bcryptjs");

class User {
    constructor(name, email, password, mobile, role, cart, order) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.role = role ? "admin" : null;
        this.cart = cart;
        this.order = order;
    }

    saveUser() {
        const db = getDb();
        return db
            .collection("users")
            .insertOne(this)
            .then((result) => {
                console.log("User Signed Up Successfully");
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    addToCart(userId) {
        console.log("In user model");
        console.log(this);
        const db = getDb();
        return db
            .collection("users")
            .updateOne({ _id: new mongodb.ObjectId(userId) }, { $set: this })
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static getAllUsers() {
        const db = getDb();
        return db
            .collection("users")
            .find()
            .toArray()
            .then((users) => {
                // console.log(users);
                return users;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static getUserById(id) {
        const db = getDb();
        return db
            .collection("users")
            .find({ _id: new mongodb.ObjectId(id) })
            .next()
            .then((user) => {
                return user;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static findUserByEmail(email, password) {
        const db = getDb();
        return db
            .collection("users")
            .find({ email: email })
            .next()
            .then((user) => {
                if (user) {
                    let passwordValid = bcrypt.compareSync(password, user.password);
                    // console.log(user);
                    if (passwordValid) {
                        return user;
                    } else {
                        return "Invalid Password";
                    }
                } else {
                    return "Email not Found";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    static login(email, password) {
        const db = getDb();
    }
}

module.exports = User;