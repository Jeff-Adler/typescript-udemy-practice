class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  //this argument is not required, but tells the compiler that this should point to object of type Department, to prevent possible 'this' errors
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    // assigns "IT" to department name field of super
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    // assigns "IT" to department name field of super
    super(id, "IT");
  }

  addReport(this: AccountingDepartment, text: string) {
    this.reports.push(text);
  }

  printReports(this: AccountingDepartment) {
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
