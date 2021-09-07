"use strict";
exports.__esModule = true;
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.addTeacher = function (id, sub_div) {
        this.id = id;
        this.subDiv = sub_div;
    };
    Teacher.prototype.showTeacherData = function () {
        console.log(this.id);
        console.log(this.subDiv);
    };
    return Teacher;
}());
exports.Teacher = Teacher;
// var x: sub_div = { div: ["101", "102"], subject: ["a", "sd"] };
// var d = new Teacher();
// d.addTeacher(999, x);
// d.showTeacherData();
