const hobbies = ['sports','Cooking'];
for(let hobby of hobbies){
    console.log(hobby);
}
// map returns a new array
console.log(hobbies.map(hobby =>'Hobby: ' + hobby))
console.log(hobbies);

// adding to the array
hobbies.push('Programming');
console.log(hobbies);
