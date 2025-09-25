// Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished
const fetchData = ()=>{
    const promise = new Promise((resolve, reject) => {
           setTimeout(() => {
        resolve('Done!');
    }, 1500)
    });
    return promise;
};

setTimeout( () => {
    console.log("Time is Done!");
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })

    .then(text2 => {
        console.log(text2);
    });
}, 2000);

console.log("Hello!")
console.log("Hi!")

 