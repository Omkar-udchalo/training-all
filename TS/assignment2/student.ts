interface Student {
  division: string;
  subjects: string[];
  roll: number;
}

export class StudentData implements Student {
  division: string;
  subjects: string[];
  roll: number;

  constructor(div: string, sub: string[], roll: number) {
    this.division = div;
    this.subjects = sub;
    this.roll = roll;
  }

  showStudentData() {
    console.log(this.division + "\t" + this.roll);
    for (let i of this.subjects) {
      console.log(i);
    }
  }
}

// const d = new StudentData("Omkar", ["asd", "sdf"], 21);
// d.showData();
