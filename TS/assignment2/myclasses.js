"use strict";
exports.__esModule = true;
exports.MyClass = void 0;
var teacher_1 = require("./teacher");
var student_1 = require("./student");
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.teachers = [];
        this.students = [];
    }
    MyClass.prototype.addTeacherToClass = function (teacherId, divTeach, subject) {
        var teachData = new teacher_1.Teacher();
        teachData.addTeacher(teacherId, { div: divTeach, subject: subject });
        this.teachers.push(teachData);
    };
    MyClass.prototype.addStudentsToClass = function (name, subj, roll) {
        var studData = new student_1.StudentData(name, subj, roll);
        this.students.push(studData);
    };
    MyClass.prototype.displayData = function (classObj) {
        console.log("Teacher Data");
        // console.log(this.teachers);
        for (var _i = 0, _a = classObj.teachers; _i < _a.length; _i++) {
            var teacherData = _a[_i];
            console.log(teacherData.id);
            for (var _b = 0, _c = teacherData.subDiv.div; _b < _c.length; _b++) {
                var div_teach = _c[_b];
                console.log(div_teach);
            }
            for (var _d = 0, _e = teacherData.subDiv.subject; _d < _e.length; _d++) {
                var sub_teach = _e[_d];
                console.log(sub_teach);
            }
        }
        console.log("++++++++++++++++++++++++++++++");
        console.log("Student Data");
        for (var _f = 0, _g = classObj.students; _f < _g.length; _f++) {
            var studData = _g[_f];
            console.log(studData.division);
            console.log(studData.roll);
            for (var _h = 0, _j = studData.subjects; _h < _j.length; _h++) {
                var sub = _j[_h];
                console.log(sub);
            }
        }
    };
    return MyClass;
}());
exports.MyClass = MyClass;
// var cls = new MyClass(4);
// cls.addTeacherToClass(101, ["BE2"], ["os", "cn"]);
// cls.addTeacherToClass(102, ["BE11"], ["ml", "ai"]);
// cls.addStudentsToClass("BE2", ["os", "cn"], 41239);
// cls.addStudentsToClass("BE11", ["ml", "ics"], 41101);
// cls.displayData();
// var studData = new StudentData("Omkar", ["cn", "os"], 41239);
// cls.students.push(studData);
// studData = new StudentData("Gautam", ["cn", "dsa"], 41232);
// cls.students.push(studData);
// var teachData = new Teacher();
// teachData.addTeacher(101, { div: ["BE2"], subject: ["os", "cn"] });
// cls.teacher.push(teachData);
// console.log("+==========================================+");
