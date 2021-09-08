"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var myclasses_1 = require("./myclasses");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.myclasses = [];
        return _this;
    }
    Main.prototype.addClassData = function () {
        var cls = new myclasses_1.MyClass();
        cls.class_no = 5;
        cls.addTeacherToClass(101, ["5A"], ["os", "cn"]);
        cls.addTeacherToClass(102, ["5B"], ["ml", "ai"]);
        cls.addTeacherToClass(101, ["5A"], ["os", "cn"]);
        cls.addTeacherToClass(102, ["5B"], ["ml", "ai"]);
        cls.addTeacherToClass(101, ["5A"], ["os", "cn"]);
        cls.addTeacherToClass(102, ["5B"], ["ml", "ai"]);
        cls.addStudentsToClass("5A", ["os", "cn"], 41239);
        cls.addStudentsToClass("5B", ["ml", "ics"], 41101);
        this.myclasses.push(cls);
        //another class
        var cls2 = new myclasses_1.MyClass();
        cls2.class_no = 10;
        cls2.addTeacherToClass(104, ["10A"], ["math", "geo"]);
        cls2.addTeacherToClass(105, ["10B"], ["sci", "his"]);
        cls2.addStudentsToClass("10A", ["geo", "math"], 27);
        cls2.addStudentsToClass("10B", ["sci", "his"], 28);
        this.myclasses.push(cls2);
    };
    Main.prototype.displayClassInfo = function (class_id) {
        console.log("Class : " + this.myclasses[class_id].class_no);
        this.displayData(this.myclasses[class_id]);
    };
    return Main;
}(myclasses_1.MyClass));
var school = new Main();
//add data of teacher and students
school.addClassData();
//display info
console.log("Class 5 info");
school.displayClassInfo(0);
//-=================================
console.log("Class 10 info");
school.displayClassInfo(1);
