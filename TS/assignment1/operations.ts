abstract class CalcOps {
  abstract addition(): number;
  abstract substraction(): number;
  abstract multiplication(): number;
  abstract division(): number;
}
interface inputData {
  num1: number;
  num2: number;
}
export class Operations extends CalcOps implements inputData {
  constructor(public num1: number, public num2: number) {
    super();
  }
  addition(): number {
    return this.num1 + this.num2;
  }
  substraction(): number {
    return this.num1 - this.num2;
  }
  multiplication(): number {
    return this.num1 * this.num2;
  }
  division(): number {
    return this.num1 / this.num2;
  }
}
