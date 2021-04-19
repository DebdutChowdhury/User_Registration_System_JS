const expect = require ('chai').expect
const testCase = require('../src/module')
const utils = require('../src/utils')

describe('Field to validate valid inputs',function() {

    it('check the  first name',function() {
        const fname = utils.patternCheck("Debdut",testCase.fnameRgx);
        expect(fname).to.true;
    })

    it('check the last name string',function() {
        const lname = utils.patternCheck("Chowdhury",testCase.lnameReg)
        expect(lname).to.true;
    })

    it('check the email string',function() {
        const email = utils.patternCheck("debdutchowdhury@gmail.com",testCase.emailReg)
        expect(email).to.true;
    })

    it('check the mobileno string',function() {
        const mobileno = utils.patternCheck("919876543210",testCase.phnumReg)
        expect(mobileno).to.true;
    })

    it('check the password string',function() {
        const password = utils.patternCheck("Caron@98",testCase.psw43Reg)
        expect(password).to.true;
    })

    
});

describe('Field to validate invalid inputs using equal method ',function() {
    it('check the  first name strings',function() {
        const fname = utils.patternCheck("Debdut",testCase.fnameRgx)
        expect(fname).to.false;
    })

    it('check the last name string',function() {
        const lname = utils.patternCheck("Chowdhury",testCase.lnameReg)
        expect(lname).to.be.false;
    })

    it('check the email string',function() {
        const email = utils.patternCheck("debdutchowdhury@gmail.com",testCase.emailReg)
        expect(email).to.false;
    })

    it('check the mobileno string',function() {
        const mobileno = utils.patternCheck("91987132424",testCase.phnumReg)
        expect(mobileno).to.not.include('91')
    })

    it('check the password string',function() {
        const password = utils.patternCheck("Charon@98",testCase.psw43Reg)
        expect(password).to.false;
    })

});