"use strict";
exports.__esModule = true;
var operations_1 = require("./operations");
var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculator.prototype.selectOperation = function (ops) {
        var operationObj = new operations_1.Operations(this.num1, this.num2);
        if (ops === "add") {
            console.log("Addition result is : " + operationObj.addition());
        }
        else if (ops === "sub") {
            console.log("SUb result is : " + operationObj.substraction());
        }
        else if (ops === "mul") {
            console.log("Multi result is : " + operationObj.multiplication());
        }
        else if (ops === "div") {
            console.log("Div result is : " + operationObj.division());
        }
        else {
            console.log("Wrong option");
        }
    };
    return Calculator;
}());
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
var num1 = 50;
var num2 = 25;
var cal = new Calculator(num1, num2);
cal.selectOperation("add");
cal.selectOperation("sub");
cal.selectOperation("mul");
cal.selectOperation("div");
