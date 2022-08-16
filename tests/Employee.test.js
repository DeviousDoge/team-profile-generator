const Employee = require("../lib/Employee");

test("Generic constructor for employee objects", () => {
    const employee = new Employee("Johnny", 69, "johnnyappleseed@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Get name from the constructor file", () => {
    const employee = new Employee("Johnny", 69, "johnnyappleseed@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

test("Get ID from the constructor file", () => {
    const employee = new Employee("Johnny", 69, "johnnyappleseed@gmail.com");

    expect(employee.getID()).toEqual(expect.any(Number));
});

test("Get email from the constructor file", () => {
    const employee = new Employee("Johnny", 69, "johnnyappleseed@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("Get role from the constructor file", () => {
    const employee = new Employee("Johnny", 69, "johnnyappleseed@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
});
