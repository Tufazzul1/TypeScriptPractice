{



// Learning Function 
// Normal Function 
// Arrow Function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(10, 12);

const addArrow = (num1: number, num2: number): number => num1 + num2


// Object --> function --> method

const poorUser = {
    name: "Tufazzul",
    balance: 0,
    addBalance(balance: number): number {
        return this.balance + balance
    }
}

const poorUser2 = {
    name: "Tufazzul",
    balance: 0,
    addBalance(balance: number): string {
        return `This is my balance : ${this.balance + balance}`
    }
}


const arr: number[] = [1, 4, 10]

const newArray : number[] = arr.map((elem: number) : number => elem * elem);


}