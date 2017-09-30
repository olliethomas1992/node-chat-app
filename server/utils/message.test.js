const expect = require('expect');
const { generateMessage, generageLocationMessage } = require('./message.js');

describe("Generate Message", ()=>{
    it("Should generate the correct message object", () => {
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

describe("Generate Location Message", ()=>{
    it("Should generate the correct location object", () => {
        var from = 'Ollie';
        var lat = 1;
        var long = 1;
        var url = "https://google.com/maps?q=1,1";

        var locationMessage = generageLocationMessage(from, lat, long);

        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({ from, url });
    });
});