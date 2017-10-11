const expect = require('expect');

/* Local Imports
---------------------------------------------------- */
const { Users } = require('./users');


describe("Users Class", () => {
    it("Should add a User", () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Ollie',
            room: 'The Office Fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });
});