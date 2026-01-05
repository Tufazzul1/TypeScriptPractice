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
{
    // OOP Inheritance
    var Perent = /** @class */ (function () {
        function Perent(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        return Perent;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, address) {
            return _super.call(this, name, age, address) || this;
        }
        return Student;
    }(Perent));
    var student1 = new Student("Md Tufazzul", 23, "Uganda");
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher(name, age, address, designation) {
            var _this = _super.call(this, name, age, address) || this;
            _this.designation = designation;
            return _this;
        }
        Teacher.prototype.getSleep = function (numOfHours) {
            console.log("".concat(this.name, " will sleep for ").concat(numOfHours, " hours"));
        };
        Teacher.prototype.teacherAge = function (numberOfAge) {
            console.log("".concat(this.name, " is ").concat(numberOfAge, " years old"));
        };
        return Teacher;
    }(Perent));
    var teacher1 = new Teacher("Mr Teacher", 45, "Uganda", "America");
    teacher1.getSleep(8);
    teacher1.teacherAge(45);
}
