/*****************************************callback,promises,Async,Await*********************************/
//problem statement->why is vishal not printing
// let datas = [{ name: "ASHISH" }, { name: "NIKHIL" }, { name: "SUDHIR" }];
// function getdata() {
//     setTimeout(() => {
//         let ouput = "";
//         datas.forEach((data, index) => { ouput += `<li>${data.name}</li>` });
//         document.body.innerHTML = ouput;
//     }, 1000);
// }
// function createdata(data) {
//     setTimeout(() => {
//         data.push(data);
//     }, 3000);
// }
// getdata();
// createdata({ name: "VISHAL" });



//first way is use callback function
// let datas = [{ name: "ASHISH" }, { name: "NIKHIL" }, { name: "SUDHIR" }];
// function getdata() {
//     setTimeout(() => {
//         let ouput = "";
//         datas.forEach((data, index) => { ouput += `<li>${data.name}</li>` });
//         document.body.innerHTML = ouput;
//     }, 1000);
// }
// function createdata(callback, data) {
//     setTimeout(() => {
//         datas.push(data);
//         callback();
//     }, 2000);
// }
// createdata(getdata, { name: "VISHAL" });

// second way is using promises
// let datas = [{ name: "ASHISH" }, { name: "NIKHIL" }, { name: "SUDHIR" }];
// function getdata() {
//     setTimeout(() => {
//         let ouput = "";
//         datas.forEach((data, index) => { ouput += `<li>${data.name}</li>` });
//         document.body.innerHTML = ouput;
//     }, 1000);
// }
// function createdata(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(data);
//             let err = false;
//             if (!err) {
//                 resolve();
//             }
//             else {
//                 reject("kuch to gaadbad hai ");
//             }
//         }, 2000);
//     });

// }
// createdata({ name: "VISHAL" }).then(getdata).catch(err => console.log(err));



// third method is Async & await
let datas = [{ name: "ASHISH" }, { name: "NIKHIL" }, { name: "SUDHIR" }];
function getdata() {
    setTimeout(() => {
        let ouput = "";
        datas.forEach((data, index) => { ouput += `<li>${data.name}</li>` });
        document.body.innerHTML = ouput;
    }, 1000);
}
function createdata(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(data);
            let err = false;
            if (!err) {
                resolve();
            }
            else {
                reject("kuch to gaadbad hai ");
            }
        }, 2000);
    });

}
async function start() {
    await createdata({ name: "VISHAL" })
    getdata();
}
start();