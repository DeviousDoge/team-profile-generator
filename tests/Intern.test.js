const Intern = require("../lib/Intern")

test("specific constructor for Intern", () => {
    const intern = new Intern('Johnny', 69, 'johnnyappleseed@gmail.com', 'PragerU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test("gets school from constructor", () => {
    const intern = new Intern('Johnny', 69, 'johnnyappleseed@gmail.com', 'PragerU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
