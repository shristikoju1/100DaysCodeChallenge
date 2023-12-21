function api() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
        
           
    });
};

async function getWeatherData(){
    await api();  //1st
    await api();  //2nd
}

function getData(dataId, getNextData){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`data = ${dataId}`);
            resolve("success");
        },2000 );
    });
};

//-----async-await------------------

async function getAllData(){
    console.log("getting data1..............");
    await getData(1);
    console.log("getting data2..............");
    await getData(2);
    console.log("getting data3..............");
    await getData(3);
    console.log("getting data4..............");
    await getData(4);
    console.log("getting data5..............");
    await getData(5);
}
