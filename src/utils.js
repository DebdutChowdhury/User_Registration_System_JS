module.exports={

    patternCheck(string,regPattern){
        var patt = new RegExp(regPattern);
        var res = patt.test(string);
        if(res == true){
            // console.log("validated output");
            return true;
        }
        else{
            // console.log("please enter the valid input");
            return false;
        }
    }

}