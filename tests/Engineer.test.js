const Engineer = require("../lib/Engineer")

test("specific constructor for engineer", () => {
    const engineer = new Engineer('Johnny', 69, 'johnnyappleseed@gmail.com', 'JAppleseed69');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test("gets github from constructor", () => {
    const engineer = new Engineer('Johnny', 69, 'johnnyappleseed@gmail.com', 'JAppleseed69');
    
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
