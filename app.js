// let getDataFromApi = new Promise((resolve,reject) =>{
//     let getDataSuccessfully = true;
//     if (getDataSuccessfully){
//         resolve ("get data successfully");
//     }else{
//         reject ("not found ...");
//     }
// });
// console.log(getDataFromApi);
// getDataFromApi.then(result =>{
//     console.log(result)
// }).catch(reason => {
//     console.log(reason);
// });


//async

// async function getDataFromApi(){
//     let getDataSuccessfully = true;
//     if (getDataSuccessfully){
//         return "get data successfully";
//     }else{
//         throw new Error("not found");
//     }
// }
// console.log(getDataFromApi());
// getDataFromApi()
//     .then(result =>{
//     console.log(result)
// })
//     .catch(reason => {
//     console.log(reason);
// });


//await

// async function getDataFromApi(){
//     let getDataSuccessfully = true;
//     if (getDataSuccessfully){
//         return "get data successfully";
//     }else{
//         throw new Error("not found");
//     }
// }
// showData();
// async function showData(){
//     let data = await getDataFromApi();
//     console.log(data);
// }


// async function getDataFromApi(){
//     let clientName = new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve ("fatemeh");
//         },3000);
//     });
//
//     let clientLastName = new Promise((resolve , reject) =>{
//         setTimeout(()=>{
//             resolve ("badiei");
//         },6000);
//     });
//
//     let clientInfo = await clientName;
//     let clientInfoFull = await clientLastName;
//     console.log(clientInfo);
//     console.log(clientInfoFull);
//
//     let getDataSuccessfully = true;
//     if (getDataSuccessfully){
//         return "get data successfully";
//     }else{
//         throw new Error("not found");
//     }
// }
// showData();
// async function showData(){
//     let data = await getDataFromApi();
//     console.log(data);
// }

//use async and await in api

async function showApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data =await response.json();
  return data;
}
showOnConsole();
async function showOnConsole() {
    const dataConsole = await showApi();
    console.log(dataConsole);
}














