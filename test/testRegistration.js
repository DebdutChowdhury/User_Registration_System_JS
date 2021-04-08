const assert = require ('chai').assert;
const result = require('../src/userRegistration');

describe('Field to validate',function() {
    it('check the  first name strings',function() {
        const fname = result.FirstName("Debdut")
        assert.equal(fname,true);
    })

    it('check the  first name strings',function() {
        const fname = result.FirstName("debdut")
        assert.equal(fname,true);
    })

    it('check the last name string',function() {
        const lname = result.LastName("Chowdhury")
        assert.equal(lname,true);
    })

    it('check the last name string',function() {
        const lname = result.LastName("chowdhury")
        assert.equal(lname,true);
    })

    it('check the email string',function() {
        const email = result.Email("debdut@gmail.com")
        assert.equal(email,true);
    })

    it('check the email string',function() {
        const email = result.Email("debdut.gm")
        assert.equal(email,true);
    })


    it('check the mobileno string',function() {
        const mobileno = result.mobileNumber("919876543210")
        assert.equal(mobileno,true);
    })

    it('check the mobileno string',function() {
        const mobileno = result.mobileNumber("098721")
        assert.equal(mobileno,true);
    })

    it('check the password string',function() {
        const password = result.password("Charon@98")
        assert.equal(password,true);
    })
    it('check the password string',function() {
        const password = result.password("debdut")
        assert.equal(password,true);
    })
});