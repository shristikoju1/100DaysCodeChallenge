// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     // reject("error occured");
// });

function getData(dataId, getNextData){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`data = ${dataId}`);
            resolve("success");
            if (getNextData) {
            getNextData();
            }
        },3000 );
    });
}


//promise chain

console.log("getting data 1..........");
getData(1)
.then((res) => {
    console.log("getting data 2..........");

    return getData(2);
})
.then((res) => {
    console.log("getting data 2..........");
    return getData(3);
})
.then((res) => {
    console.log("getting data 2..........");
    console.log(res);
})
    






//------------- .then() & .catch()--------------------------




// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("network error");
//     });
// };

// let promise = getPromise();

// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });



//------------------------promise chaining-------------------------------


// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
// setTimeout(() => {
//     console.log("data1");
//     resolve("success");
// },4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
// setTimeout(() => {
//     console.log("data2");
//     resolve("success");
// },4000);
//     });
// }

// console.log("fetching data1.....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2.....");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//     console.log(res);
// })
// })

// console.log("fetching data1.....");
// asyncFunc1().then((res) => {
//     console.log(res);
//     console.log("fetching data2.....");
//     asyncFunc2().then((res) => {
//     console.log(res);
// })
// })