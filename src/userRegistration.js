let fnameRgx = /[A-Z]{1}[a-z]*/;
let lnameReg = /[A-Z]+([ '-][a-zA-Z]+)*/
let emailReg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
let phnumReg = /^[0-99]{2}[0-9]{10}/;
let psw43Reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

module.exports = {
    FirstName(fname){         
           var patt = new RegExp(fnameRgx);
           var res = patt.test(fname);  
           if(res == true)
           {
               console.log("validated");
               return true;
           }
           else{
               console.log("invalid inputs");
               return false;
           }
   },

   LastName (lname){
       var patt = new RegExp(lnameReg);
       var res = patt.test(lname);
       if(res == true)
           {
               console.log("validated");
               return true;
           }
           else{
               console.log("invalid inputs");
               return false;
           }
   },

    Email(email){
       var patt = new RegExp(emailReg);
       var res = patt.test(email);
       if(res == true)
           {
               console.log("validated");
               return true;
           }
           else{
               console.log("invalid inputs");
               return false;
           }
   },

   mobileNumber(phnum){

       var patt = new RegExp(phnumReg);
       var res = patt.test(phnum);
       if(res == true)
           {
               console.log("validated");
               return true;
           }
           else{
               console.log("invalid inputs");
               return false;
           }
   },

    password (pwd){
       var patt = new RegExp(psw43Reg);
           var res = patt.test(pwd);
           if(res == true)
           {
               console.log("validated");
               return true;
           }
           else{
               console.log("invalid inputs");
               return false;
           }

    }

} 