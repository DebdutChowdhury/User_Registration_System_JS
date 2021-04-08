const assert = require ('chai').assert;
const testCase = require('../src/module')
const utils = require('../src/utils')

describe('Field to validate valid inputs',function() {

    it('check the  first name',function() {
        const fname = utils.patternCheck("Debdut",testCase.fnameRgx);
        assert.equal(fname,true);
    })

    it('check the last name string',function() {
        const lname = utils.patternCheck("Chowdhury",testCase.lnameReg)
        assert.equal(lname,true);
    })

    it('check the email string',function() {
        const email = utils.patternCheck("debdutchowdhury@gmail.com",testCase.emailReg)
        assert.equal(email,true);
    })

    it('check the mobileno string',function() {
        const mobileno = utils.patternCheck("919876543210",testCase.phnumReg)
        assert.equal(mobileno,true);
    })

    it('check the password string',function() {
        const password = utils.patternCheck("Caron@98",testCase.psw43Reg)
        assert.equal(password,true);
    })

    
});

describe('Field to validate invalid inputs using equal method ',function() {
    it('check the  first name strings',function() {
        const fname = utils.patternCheck("debdut",testCase.fnameRgx)
        assert.equal(fname,true);
    })

    it('check the last name string',function() {
        const lname = utils.patternCheck("chowdhury",testCase.lnameReg)
        assert.equal(lname,true);
    })

    it('check the email string',function() {
        const email = utils.patternCheck("debdutchowdhury@gm",testCase.emailReg)
        assert.equal(email,true);
    })

    it('check the mobileno string',function() {
        const mobileno = utils.patternCheck("919871",testCase.phnumReg)
        assert.equal(mobileno,true);
    })

    it('check the password string',function() {
        const password = utils.patternCheck("charon@98",testCase.psw43Reg)
        assert.equal(password,true);
    })

});