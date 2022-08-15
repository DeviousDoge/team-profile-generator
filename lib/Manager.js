const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name,id, email);
        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return 'Manager';
    }
}

const manager1 = new Manager(this.officeNum);

manager1.getOfficeNum();
manager1.getRole();

module.exports = Manager