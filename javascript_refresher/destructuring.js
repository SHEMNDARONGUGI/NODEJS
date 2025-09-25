const student = {
    regNumber: "C0244014032023",
    name:"Shem Ndaro",
    course:"Computer Science"
};

// let studentDetails = ({ name, course})=>{
//     console.log(name, course)
// };
// studentDetails(student);

let {regNumber, name}=student;
console.log(regNumber, name);

// Destructuring for arrays
const fruits = ["Mangoes", "Banana", "apple"];
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);