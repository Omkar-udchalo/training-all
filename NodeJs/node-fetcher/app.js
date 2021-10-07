const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// add mongo connect file
const mongoConnect = require("./mongo").mongoConnect;
const routes = require("./routes/routes").router;
// console.log("Connecting...");

app.get("/", (req, res) => {
    // res.send("<h1>Home Page<h1>");
    res.json({ hotelName: "GK" });
});

app.use(routes);

mongoConnect(() => {
    app.listen(3000);
});