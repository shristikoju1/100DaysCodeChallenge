// function hello(){
//     console.log("hello");
// }

// setTimeout(hello, 2000); //timeout : 2s = 2000

//-----------------arrow function with asynchronous---------------------

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 2000); //timeout : 2s = 2000

console.log("one");
console.log("two");

setTimeout ( () => {
    console.log("hello");
}, 2000);

console.log("three");
console.log("four");



function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
// calculator(1, 2, sum);

calculator(1, 2, (a, b) => {
    console.log(a+b);
});





function getData(dataId, getNextData){
    setTimeout(() => {
        console.log(`data = ${dataId}`);
        if (getNextData) {
        getNextData();
        }
    },2000 );
    
}

//---------------------callback hell-----------------------
getData(1,() => {
    console.log("getting data 2..........");
    getData(2, () =>{
        console.log("getting data 3..........");
        getData(3 , () =>{
            console.log("getting data 4..........");
            getData(4);
        });
    });
});