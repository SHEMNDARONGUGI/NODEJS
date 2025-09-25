// copies + changes 
// slices copies the array
const hobbies = ['sports','Cooking'];
const copiedArray = hobbies.slice();
console.log(copiedArray);

// another method using spread operator
const copiedValue = [...hobbies];
console.log(copiedValue);

// rest operator 
const toArray = (...args)=>{
    return args;
};
console.log(toArray(1,2,3,4));

//Destructuring.js
const person = {
    name:"Steven",
    age: 25,
    amount: 1000,
    products:["PS5", "Gaming Keyboad", "HP 24-inch edge-to-edge monitor"],
    address:{
        country:"Kenya",
        county:"Nairobi",
        town:"Kinoo"
    },
    greet(){
        console.log(`Hi, ${this.name}`)
    }
}

// first method 

// const printName = (personData) => {
//     console.log(personData.name)
// }

// printName(person);

// using object destructuring
 const printName = ({ name}) => {
    console.log(name);
};

printName(person);

// method2 
const {name, age } = person;
console.log(name, age);
