import { MyClass } from "./myclasses";
class Main extends MyClass {
  myclasses: MyClass[] = [];

  constructor() {
    super();
  }

  addClassData() {
    var cls = new MyClass();
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
    var cls2 = new MyClass();
    cls2.class_no = 10;
    cls2.addTeacherToClass(104, ["10A"], ["math", "geo"]);
    cls2.addTeacherToClass(105, ["10B"], ["sci", "his"]);
    cls2.addStudentsToClass("10A", ["geo", "math"], 27);
    cls2.addStudentsToClass("10B", ["sci", "his"], 28);
    this.myclasses.push(cls2);
  }

  displayClassInfo(class_id: number) {
    console.log("Class : " + this.myclasses[class_id].class_no);
    this.displayData(this.myclasses[class_id]);
  }
}

var school = new Main();
//add data of teacher and students
school.addClassData();
//display info
console.log("Class 5 info");

school.displayClassInfo(0);
//-=================================
console.log("Class 10 info");

school.displayClassInfo(1);
