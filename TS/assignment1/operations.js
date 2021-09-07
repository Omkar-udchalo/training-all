"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Operations = void 0;
var CalcOps = /** @class */ (function () {
    function CalcOps() {
    }
    return CalcOps;
}());
var Operations = /** @class */ (function (_super) {
    __extends(Operations, _super);
    function Operations(num1, num2) {
        var _this = _super.call(this) || this;
        _this.num1 = num1;
        _this.num2 = num2;
        return _this;
    }
    Operations.prototype.addition = function () {
        return this.num1 + this.num2;
    };
    Operations.prototype.substraction = function () {
        return this.num1 - this.num2;
    };
    Operations.prototype.multiplication = function () {
        return this.num1 * this.num2;
    };
    Operations.prototype.division = function () {
        return this.num1 / this.num2;
    };
    return Operations;
}(CalcOps));
exports.Operations = Operations;
