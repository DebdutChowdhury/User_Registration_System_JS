const readeline = require('readline-sync');
console.log("<--User registration system using JavaScript-->");
console.log("1. Check regex for firstname");
console.log("2. Check regex for lastname");
console.log("3. Check regex for Email address");
console.log("4. Check regex for Phone number");
console.log("5. Check regex for Password1");
console.log("6. Check regex for Password2");
console.log("7. Check regex for Password3");
console.log("8. Check regex for Password4");
console.log("9. Exit");
const Validation = () => {
    let choice = readeline.question("Enter what you want: ")
    switch(choice){
        case '1':
            let fname = readeline.question("Enter the firstname: ");
            let fnameRgx = /[A-Z][a-z]*/;
            if (fnameRgx.test(fname) == true){
                console.log("Valid First name");
            }
            else{
                console.log("Firstname invalid please input proper way");
                return false;
            }
            break;

        case '2':
            let lname = readeline.question("Enter the last name: ");
            let lnameReg = /[A-Z]+([ '-][a-zA-Z]+)*/
            if (lnameReg.test(lname) == true){
                console.log("Valid Last name");
            }
            else{
                console.log("Lastname invalid please input proper way");
                return false;
             }
            break;

        case '3':
            let email = readeline.question("Enter the email: ");
            let emailReg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
            if (emailReg.test(email) == true){
                console.log("Valid Email");
            }
            else{
                console.log("Email invalid please input proper way");
                return false;
            }
            break;

        case '4':
            let phnum = readeline.question("Enter the phone numner: ");
            let phnumReg = /^[0-99]{2}[0-9]{10}/;
            if (phnumReg.test(phnum) == true){
                console.log("Valid phone number");
            }
            else{
                console.log("Phone number invalid please input proper way");
                return false;
            }
            break;

        case '5':
            let pswd1 = readeline.question("Enter the password(min:8 char): ");
            let pswd1Reg = /^[A-Za-z0-9]{8,}/;
            if (pswd1Reg.test(pswd1) == true){
                console.log("Valid password");
            }
            else{
                console.log("password invalid please input proper way");
                return false;
            }
            break;

        case '6':
            let pswd2 = readeline.question("Enter the password(min:8 char): ");
            let pswd2Reg = /^[A-Za-z0-9]{8,}/;
            if (pswd2Reg.test(pswd2) == true){
                console.log("Valid password");
            }
            else{
                console.log("password invalid please input proper way");
                return false;
            }
            break;
        
        case '7':
            let pswd3 = readeline.question("Enter the password(min:8 char): ");
            let pswd3Reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
            if (pswd3Reg.test(pswd3) == true){
                console.log("Valid password");
            }
            else{
                console.log("password invalid please input proper way");
                return false;
            }
            break;

        case '8':
            let pswd4 = readeline.question("Enter the password: ");
            let psw43Reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/;
            if (pswd4Reg.test(pswd4) == true){
                console.log("Valid password");
            }
            else{
                console.log("password invalid please input proper way");
                return false;
            }
            break;

        case '9':
            console.log("Thank You, Visit again");
            break;
    }
}
Validation();