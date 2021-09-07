"use strict";
exports.__esModule = true;
exports.StudentData = void 0;
var StudentData = /** @class */ (function () {
    function StudentData(div, sub, roll) {
        this.division = div;
        this.subjects = sub;
        this.roll = roll;
    }
    StudentData.prototype.showStudentData = function () {
        console.log(this.division + "\t" + this.roll);
        for (var _i = 0, _a = this.subjects; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    return StudentData;
}());
exports.StudentData = StudentData;
// const d = new StudentData("Omkar", ["asd", "sdf"], 21);
// d.showData();
