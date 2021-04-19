const readline = require('readline-sync')

// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);


// // use promise in function constructor
// const prob = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         let roll_no = [1,2,3,4,5];
//         resolve(roll_no)
//         // reject('error for comunicating')
//     }, 2000);
// });

// // promise as an object
// const getData = (indexdata) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( (indexdata) =>{
//             const data = {
//                 name: 'deb',
//                 age: 24
//             }
//             resolve(`My roll number is ${indexdata}, name ${data.name} and age ${data.age}`);
            
//         }, 2000, indexdata)
//     });
// }

// prob.then( (rollno) => {
//     console.log("hello");
//     console.log(rollno);
//     return getData(rollno[1])
//     }).then( (details) => {
//         console.log(details);
// }).catch( (error) => {
//     console.log(error);
// })

// function fun1(){
//     return new Promise(function(resolve, reject) {
//         setTimeout( () => {
//             const error = true;
//             if(!error){
//                 console.log('problem resolved');
//                 resolve();
//             }
//             else{
//                 console.log('problem not resolved');
//                 reject();
//             }
//         }, 2000)
//     })
// }

// fun1().then( () => {
//     console.log('Thanks for resolving');
// }).catch( () => {
//     console.log('very bad');
// })

