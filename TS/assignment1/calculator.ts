import { Operations } from "./operations";

class Calculator {
  constructor(public num1: number, public num2: number) {}

  selectOperation(ops: string) {
    const operationObj = new Operations(this.num1, this.num2);
    if (ops === "add") {
      console.log("Addition result is : " + operationObj.addition());
    } else if (ops === "sub") {
      console.log("SUb result is : " + operationObj.substraction());
    } else if (ops === "mul") {
      console.log("Multi result is : " + operationObj.multiplication());
    } else if (ops === "div") {
      console.log("Div result is : " + operationObj.division());
    } else {
      console.log("Wrong option");
    }
  }
}
// const input1 = document.getElementById("num1") as HTMLInputElement;
// const input2 = document.getElementById("num2") as HTMLInputElement;
// const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
// addBtn.addEventListener("click", () => {
//   var cal = new Calculator(+input1.value, +input2.value);
//   cal.selectOperation("add");
// });
// const subBtn = document.getElementById("subBtn") as HTMLButtonElement;
// const mulBtn = document.getElementById("mulBtn") as HTMLButtonElement;
// const divBtn = document.getElementById("divBtn") as HTMLButtonElement;

// ===========================================================================================//
var num1: number = 50;
var num2: number = 25;

var cal = new Calculator(num1, num2);
cal.selectOperation("add");
cal.selectOperation("sub");
cal.selectOperation("mul");
cal.selectOperation("div");
