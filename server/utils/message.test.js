const expect = require('expect');
const { generateMessage } = require('./message.js');

describe("Generate Message", ()=>{
    it("Should generate the correct test object", () => {
        var from = 'Ollie';
        var text = 'This is a test message';

        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
        // expect(message.text).toBe('This is a test message');
        // expect(message.from).toBe('Ollie');
    });
});