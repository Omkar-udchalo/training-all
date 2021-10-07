const sql = require("./db.js");

const Menu = function(menu) {
    this.id = menu.id;
    this.name = menu.name;
    this.price = menu.price;
    this.imageLink = menu.imageLink;
};

// Menu.create = (newCustomer, result) => {
//     sql.query("INSERT INTO menus SET ?", newCustomer, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         console.log("created menu: ", { id: res.insertId, ...newCustomer });
//         result(null, { id: res.insertId, ...newCustomer });
//     });
// };

// Menu.findById = (menuId, result) => {
//     sql.query(`SELECT * FROM menus WHERE id = ${menuId}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("found menu: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // not found Menu with the id
//         result({ kind: "not_found" }, null);
//     });
// };

Menu.getAll = (result) => {
    sql.query("SELECT * FROM menu", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("menus: ", res);
        result(null, res);
    });
};

// Menu.updateById = (id, menu, result) => {
//     sql.query(
//         "UPDATE menus SET email = ?, name = ?, active = ? WHERE id = ?", [menu.email, menu.name, menu.active, id],
//         (err, res) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//                 return;
//             }

//             if (res.affectedRows == 0) {
//                 // not found Menu with the id
//                 result({ kind: "not_found" }, null);
//                 return;
//             }

//             console.log("updated menu: ", { id: id, ...menu });
//             result(null, { id: id, ...menu });
//         }
//     );
// };

// Menu.remove = (id, result) => {
//     sql.query("DELETE FROM menus WHERE id = ?", id, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows == 0) {
//             // not found Menu with the id
//             result({ kind: "not_found" }, null);
//             return;
//         }

//         console.log("deleted menu with id: ", id);
//         result(null, res);
//     });
// };

// Menu.removeAll = (result) => {
//     sql.query("DELETE FROM menus", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log(`deleted ${res.affectedRows} menus`);
//         result(null, res);
//     });
// };

module.exports = Menu;