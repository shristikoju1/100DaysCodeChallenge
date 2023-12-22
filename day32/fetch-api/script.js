const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

//----------------------------------------------aync-await-------------------------------------------------

const getFacts = async() => {
    console.log("getting data.............")
    let response = await fetch(URL);
    console.log(response);  //JSON format
    // response.json();
    let data = await response.json();
    factPara.innerText = data[1].text;
    console.log(data[1].text);
    
};

//----------------------------------------promise-chaining--------------------------------------------------

// function getFacts(){
//     fetch(URL).then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[1].text;
//     });
// }

btn.addEventListener("click", getFacts)

