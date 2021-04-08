let fnameRgx = /[A-Z]{1}[a-z]*/;
let lnameReg = /[A-Z]+([ '-][a-zA-Z]+)*/
let emailReg = /([a-zA-Z0-9]*[+._-]*[a-zA-Z0-9]+@[a-zA-Z]+.{3}[a-zA-z.]*[a-zA-z]{2})+$/ ;
let phnumReg = /^[0-99]{2}[0-9]{10}/;
let psw43Reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

module.exports = {fnameRgx, lnameReg, emailReg, phnumReg, psw43Reg};