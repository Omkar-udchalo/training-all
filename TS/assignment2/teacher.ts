interface Division {
  div: string[];
}

interface Subject {
  subject: string[];
}

type sub_div = Division & Subject;

export class Teacher {
  id: number;
  subDiv: sub_div;

  addTeacher(id: number, sub_div: sub_div) {
    this.id = id;
    this.subDiv = sub_div;
  }

  showTeacherData() {
    console.log(this.id);
    console.log(this.subDiv);
  }
}

// var x: sub_div = { div: ["101", "102"], subject: ["a", "sd"] };
// var d = new Teacher();
// d.addTeacher(999, x);
// d.showTeacherData();
