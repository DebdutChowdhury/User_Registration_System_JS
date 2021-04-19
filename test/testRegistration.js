const assert = require ('chai').assert;
const testCase = require('../src/module')
const utils = require('../src/utils')
const userRegistration = require('../src/userRegistration')

describe('promice testing here', function(){
    it('check for first name', function(){
        return userRegistration.ValidationCheck('Debdut', testCase.fnameRgx).then(function(data){
            console.log(`return from promices: ${data}`)
            assert.equal(data, true)
        })
    })
    it('check for last name', function(){
        return userRegistration.ValidationCheck('Chowdhury', testCase.lnameReg).then(function(data){
            console.log(`return from promices: ${data}`)
            assert.equal(data, true)
        })
    })
    it('check for email name', function(){
        return userRegistration.ValidationCheck('debdut@gmail.com', testCase.emailReg).then(function(data){
            console.log(`return from promices: ${data}`)
            assert.equal(data, true)
        })
    })
    it('check for phone number name', function(){
        return userRegistration.ValidationCheck('919808980898', testCase.phnumReg).then(function(data){
            console.log(`return from promices: ${data}`)
            assert.equal(data, true)
        })
    })
    it('check for password name', function(){
        return userRegistration.ValidationCheck('Debdut@12', testCase.psw43Reg).then(function(data){
            console.log(`return from promices: ${data}`)
            assert.equal(data, true)
        })
    })
})

describe('Field to validate valid inputs',function() {

    it('check the  first name',function() {
        const fname = utils.patternCheck("Debdut",testCase.fnameRgx);
        assert.isTrue(fname,true);
    })

    it('check the last name string',function() {
        const lname = utils.patternCheck("Chowdhury",testCase.lnameReg)
        assert.strictEqual(lname,true);
    })

    it('check the email string',function() {
        const email = utils.patternCheck("debdutchowdhury@gmail.com",testCase.emailReg)
        assert.deepEqual(email,true);
    })

    it('check the mobileno string',function() {
        const mobileno = utils.patternCheck("919876543210",testCase.phnumReg)
        assert.isOk(mobileno,true);
    })

    it('check the password string',function() {
        const password = utils.patternCheck("Caron@98",testCase.psw43Reg)
        assert.exists(password,true);
    })

    
});

describe('Field to validate invalid inputs using equal method ',function() {
    it('check the  first name strings',function() {
        const fname = utils.patternCheck("debdut",testCase.fnameRgx)
        assert.fail(fname,true);
    })

    it('check the last name string',function() {
        const lname = utils.patternCheck("chowdhury",testCase.lnameReg)
        assert.notEqual(lname,true);
    })

    it('check the email string',function() {
        const email = utils.patternCheck("debdutchowdhury@gm",testCase.emailReg)
        assert.notDeepEqual(email,true);
    })

    it('check the mobileno string',function() {
        const mobileno = utils.patternCheck("919871",testCase.phnumReg)
        assert.isNotOk(mobileno,true);
    })

    it('check the password string',function() {
        const password = utils.patternCheck("charon@98",testCase.psw43Reg)
        assert.notStrictEqual(password,true);
    })

});