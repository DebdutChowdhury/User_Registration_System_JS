var readline = require('readline-sync');
const utils = require('./utils')
const testCase = require('./module')


let arr = [];
let ValidationCheck = (String, pattern) => {
    return new Promise((resolve, reject) => {
        var result = false;
        setTimeout(() => {
            while (result == false) {
                var data = read(String, pattern);
                // var data = readFromUser(String, pattern);
                result = data[0];
                if (result == true) {
                    print(data[1]);
                    resolve (true);
                    break;
                }
            }
        }, 1000);
    });
}

let read = (String, pattern) => {
    // let readData = readline.question(String);
    let checkpattern = utils.patternCheck(String, pattern);
    return [checkpattern, String]
}

let readFromUser = (String, pattern) => {
    let readData = readline.question(String);
    let checkpattern = utils.patternCheck(readData, pattern);
    return [checkpattern, readData]
}

let print = function (data) {
    arr.push(data);
}


console.log("<-- Enter details for user registration -->");
ValidationCheck("Enter the first name: ", testCase.fnameRgx)
    .then(() => ValidationCheck("Enter the last name: ", testCase.lnameReg))
    .then(() => ValidationCheck("Enter the email: ", testCase.emailReg))
    .then(() => ValidationCheck("Enter the mobile number: ", testCase.phnumReg))
    .then(() => ValidationCheck("Enter the password: ", testCase.psw43Reg))
    .then(() => console.log('details', arr))
    .catch((error) => {
        console.log(error);
    })

module.exports = {ValidationCheck}