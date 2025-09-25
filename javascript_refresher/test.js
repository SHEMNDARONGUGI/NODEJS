const addOne = a => a + 1;

console.log(addOne(20));

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

// person.greet();

// console.log(person);

// for(const human in person){
//     console.log(`${human}: ${person[human]}`);
// }

// for(const place in person.address){
//     console.log(`${place}: ${person.address[place]}`);
// }

for (const product of person.products){
    console.log(`${product}`);
}

const fruits = ["Mango", "Banana", "Sugarcane"];
console.log(fruits.map(fruit => `fruit: ${fruit}`));

fruits.push("avocado");
console.log(fruits);