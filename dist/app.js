"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("01", ["Manu", "Melchior"]);
it.addEmployee("Xavier");
it.addEmployee("Robespierre");
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment("01", ["r1", "r2"]);
accounting.addEmployee("Xavier");
accounting.addEmployee("Robespierre");
accounting.printEmployeeInformation();
accounting.addReport("r3");
accounting.printReports();
console.log(accounting);
//# sourceMappingURL=app.js.map