var readline = require('readline-sync');
const utils = require('./utils')
const testCase = require('./module')


let arr = [];
    let ValidationCheck =(String,pattern)=>{
        let readData = readline.question(String);
        let checkpattern = utils.patternCheck(readData,pattern);
        if(checkpattern == true){
            print(readData)
            return readData;
        }
        while(checkpattern == false){
            let readData = readline.question(String);
            let checkpattern = utils.patternCheck(readData,pattern);
            print(readData);
            if(checkpattern == true){
                    console.log("");
                    break;
                }
                
            }
        }

    let print = function(data){
        arr.push(data);
    }
    

console.log("<-- Enter details for user registration -->");
ValidationCheck("Enter the first name: ",testCase.fnameRgx);
ValidationCheck("Enter the last name: ",testCase.lnameReg);
ValidationCheck("Enter the email: ",testCase.emailReg);
ValidationCheck("Enter the mobile number: ",testCase.phnumReg);
ValidationCheck("Enter the password: ",testCase. psw43Reg);
console.log(arr);