"use strict";
{
    // Learning Function 
    // Normal Function 
    // Arrow Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(10, 12);
    const addArrow = (num1, num2) => num1 + num2;
    // Object --> function --> method
    const poorUser = {
        name: "Tufazzul",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        }
    };
    const poorUser2 = {
        name: "Tufazzul",
        balance: 0,
        addBalance(balance) {
            return `This is my balance : ${this.balance + balance}`;
        }
    };
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
}
