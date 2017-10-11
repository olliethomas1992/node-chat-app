const expect = require('expect');
const { isRealString } = require('./validation');

describe("Validate if something is a string", ()=>{
    
    it("Should reject non-string values", () => {
        var testString = isRealString(45437);
        expect(testString).toBe(false);
    });
    
    it("Should reject string with only spaces", () => {
        var testString = isRealString('      ');
        expect(testString).toBe(false);
    });

    it("Should allow non space characters", () => {
        var testString = isRealString('The Lord of the Rings');
        expect(testString).toBe(true);
    });
});