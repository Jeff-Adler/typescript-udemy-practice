abstract class Department {
  private static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  //this argument is not required, but tells the compiler that this should point to object of type Department, to prevent possible 'this' errors
  abstract describe(this: Department): void;

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    // assigns "IT" to department name field of super
    super(id, "IT");
  }

  describe(this: ITDepartment) {
    console.log(this);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("Report nt found");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Report not valid.");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    // assigns "IT" to department name field of super
    super(id, "IT");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  addEmployee(this: AccountingDepartment, name: string) {
    if (name !== "Billy") {
      this.employees.push(name);
    }
  }

  addReport(this: AccountingDepartment, text: string) {
    this.reports.push(text);
  }

  printReports(this: AccountingDepartment) {
    console.log(this.reports);
  }

  describe(this: AccountingDepartment) {
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

// const accounting = new AccountingDepartment("01", ["r1", "r2"]);
// accounting.addEmployee("Xavier");
// accounting.addEmployee("Robespierre");
// accounting.printEmployeeInformation();
// accounting.addReport("r3");
// accounting.printReports();
// console.log(accounting);
// console.log(accounting.mostRecentReport);
// console.log(AccountingDepartment.getFiscalYear);
// creates new object with describe() function inherited from accounting object, with name "accounting" that this will point to
// const accountingCopy = {
//   name: "Accounting",
//   describe: accounting.describe,
// };

// accountingCopy.describe();

// const humanResources = {
//   name: "Human Resources",
//   describe: accounting.describe,
// };

// humanResources.describe();
