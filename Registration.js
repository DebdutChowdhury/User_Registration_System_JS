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

    let phnum = readeline.question("Enter the phone numner: ");
    let phnumReg = /^[0-99]{2}[0-9]{10}/;
    if (phnumReg.test(phnum) == true){
        console.log("Valid phone number");
    }
    else{
        console.log("Phone number invalid please input proper way");
        return false;
    }

    let pswd1 = readeline.question("Enter the password(min:8 char): ");
    let pswd1Reg = /^[A-Za-z0-9]{8,}/;
    if (pswd1Reg.test(pswd1) == true){
        console.log("Valid password");
    }
    else{
        console.log("password invalid please input proper way");
        return false;
    }

    let pswd2 = readeline.question("Enter the password(min:8 char): ");
    let pswd2Reg = /^[A-Za-z0-9]{8,}/;
    if (pswd2Reg.test(pswd2) == true){
        console.log("Valid password");
    }
    else{
        console.log("password invalid please input proper way");
        return false;
    }
}
Validation();