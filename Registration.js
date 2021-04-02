const readeline = require('readline-sync');
console.log("User registration system using JavaScript");
const Validation = () => {
    let fname = readeline.question("Enter the firstname: ");
    let fnameRgx = /[A-Z][a-z]*/;
    if (fnameRgx.test(fname) == true){
        console.log("Valid First name");
    }
    else{
        console.log("Firstname invalid please input proper way");
        return false;
    }
}
Validation();