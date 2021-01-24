"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static get getFiscalYear() {
        return Department.fiscalYear;
    }
    get getID() {
        return this.id;
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(this);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("Report nt found");
        }
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Report not valid.");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    addEmployee(name) {
        if (name !== "Billy") {
            this.employees.push(name);
        }
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log(this);
    }
}
const it = new ITDepartment("01", ["Manu", "Melchior"]);
it.addEmployee("Xavier");
it.addEmployee("Robespierre");
it.printEmployeeInformation();
console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting);
console.log(accounting2);
//# sourceMappingURL=app.js.map