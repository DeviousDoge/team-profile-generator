const Manager = require("../lib/Manager")

test("specific constructor for Manager", () => {
    const manager = new Manager('Johnny', 69, 'johnnyappleseed@gmail.com', 420);
    
    expect(manager.officeNumber) .toEqual(expect.any(Number));
});
