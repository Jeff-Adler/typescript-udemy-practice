console.log("running");

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //Intersection, different than union type

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//Function overloading specifies the return type based on the types of input parameters
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Jeff", "Adler");
//Because of overloaded function above, TypeScript allows this. It knows that result will be of type string
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

//Optional Chaining: question mark indicates to return remainder of the command only if the thing exists. Useful when fetching data
console.log(fetchedUserData?.job?.title);

const userInput = "";

// "" is considered falsy, so storedData will be set to default value
const storedData = userInput || "Default";

// ?? is stricter, and only recognizes false or undefined as falsy values. Useful for fetching data, where some values might be ""
const storedData2 = userInput ?? "Default";

console.log(storedData);
console.log(storedData2);

// type UnknownEmployee = Employee | Admin;

// const printEmployeeInformation = (emp: UnknownEmployee) => {
//   console.log("Name: " + emp.name);
//   //type check for object property
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// };

// const ue1: UnknownEmployee = {
//   name: "Jeff",
//   privileges: ["setup-admin"],
//   startDate: new Date(),
// };

// printEmployeeInformation(ue1);

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// const useVehicle = (vehicle: Vehicle) => {
//   vehicle.drive();
//   //type checker for classes
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// };

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird"; //literal type
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// const moveAnimal = (animal: Animal) => {
//   let speed;
//   //discriminated union type check, to check for properties not shared by unioned types
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving at speed: " + speed);
// };

// const a1: Bird = {
//   type: "bird",
//   flyingSpeed: 30,
// };

// const a2: Horse = {
//   type: "horse",
//   runningSpeed: 50,
// };

// moveAnimal(a1);
// moveAnimal(a2);

// //Equivalent:
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

// //To:
// const userInputElement2 = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// userInputElement.value = "Hi there!";

// interface ErrorContainer {
//   // Should check for errors like { email: 'Not a valid email', username: 'Must start with a character!' }

//   //Index Property: whatever properties you have here, every property must be a string that points to a string
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email!",
//   username: "Must start with a capital character!",
// };
