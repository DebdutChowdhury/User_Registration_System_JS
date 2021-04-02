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

    let lname = readeline.question("Enter the last name: ");
    let lnameReg = /[A-Z]+([ '-][a-zA-Z]+)*/
    if (lnameReg.test(lname) == true){
        console.log("Valid Last name");
    }
    else{
        console.log("Lastname invalid please input proper way");
        return false;
    }

    let email = readeline.question("Enter the email: ");
    let emailReg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (emailReg.test(email) == true){
        console.log("Valid Email");
    }
    else{
        console.log("Email invalid please input proper way");
        return false;
    }
}
Validation();