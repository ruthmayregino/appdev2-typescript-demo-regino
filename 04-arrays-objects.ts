let hobbies = ["Crochet", "Baking"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Regino", "RuthMay0503", 123456]

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Ruthmay",
    age: 23,
    hobbies: ["Crochet", "Baking"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: {} = "Ruth May Regino"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'RuthMay'
    // isPartTimeInstructor: true
}