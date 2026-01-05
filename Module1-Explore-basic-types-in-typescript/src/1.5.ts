// Reference Type --> Object

const user: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: "Md",
    middleName: "Tufazzul",
    lastName: "Husen"
}


const user2: {
    readonly company : string; // type --> literal Type 
    firstName: string;
    middleName?: string; // Optional Type
    lastName: string;
    isMarried : boolean;
} = {
    company : 'Programming Hero',
    firstName: "Jhankar",
    lastName: "Mahbub",
    isMarried : true,
}

// user2.company='PH' // Read only Practice 