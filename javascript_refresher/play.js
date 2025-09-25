let studentName = "Jacinta";
let studentClass = "Grade 9";
let studentAge = 15;

function studentInformation(userName, userClass, userAge){
      return (
        'Name: ' + userName + 
        ', class: ' + userClass +
        ', age: ' + userAge
    );
}
console.log(studentInformation("Shem", "Year 3", 25));

const studentData = function(userName, userClass, userAge){
     return (
        'Name: ' + userName + 
        ', class: ' + userClass +
        ', age: ' + userAge
    );
}
console.log(studentData("Collins", "Year 9", 24));

const classInfo = (userName, studentNumber, averageAge) => {
    return (
        'Name: ' + userName + 
        ', class: ' + studentNumber +
        ', age: ' + averageAge
    );
}
console.log(classInfo("Computer Science", 80, 20));

const studentDetails = (userName, userClass, userAge) =>{
    return (
        'Name: ' + userName + 
        ', class: ' + userClass +
        ', age: ' + userAge
    );
}

console.log(studentDetails(studentName, studentClass, studentAge));

let number = 1;

if(number === "1"){
    console.log(true);
}
else
{
    console.log(false);
}

let a = 5;
let b = 0;

for(b = 0; b <= 12; b++)
{
    console.log(`${a} x ${b} = ${a*b}`);
}
