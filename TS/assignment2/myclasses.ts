import { Teacher } from "./teacher";
import { StudentData } from "./student";
export class MyClass {
  teachers: Teacher[] = [];
  students: StudentData[] = [];
  class_no: number;
  constructor() {}

  addTeacherToClass(teacherId: number, divTeach: string[], subject: string[]) {
    if (this.teachers.length < 5) {
      var teachData = new Teacher();
      teachData.addTeacher(teacherId, { div: divTeach, subject: subject });
      this.teachers.push(teachData);
    } else {
      console.log("Cannot add more than 5 teachers");
      return;
    }
  }

  addStudentsToClass(name: string, subj: string[], roll: number) {
    if (this.students.length <= 60) {
      var studData = new StudentData(name, subj, roll);
      this.students.push(studData);
    } else {
      console.log("Cannot add more than 60 students");
    }
  }

  displayData(classObj: MyClass) {
    console.log("Teacher Data");
    // console.log(this.teachers);
    for (let teacherData of classObj.teachers) {
      console.log(teacherData.id);
      for (let div_teach of teacherData.subDiv.div) {
        console.log(div_teach);
      }
      for (let sub_teach of teacherData.subDiv.subject) {
        console.log(sub_teach);
      }
    }
    console.log("++++++++++++++++++++++++++++++");

    console.log("Student Data");

    for (let studData of classObj.students) {
      console.log(studData.division);
      console.log(studData.roll);
      for (let sub of studData.subjects) {
        console.log(sub);
      }
    }
  }
}

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
