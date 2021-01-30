//factor function decorator
function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

const WithTemplate = (template: string, hookId: string) => {
  return (constructor: any) => {
    console.log("Rendering template");
    const hookEle = document.getElementById(hookId);
    // gets values from constructor of class it decorates
    const p = new constructor();
    if (hookEle) {
      hookEle.innerHTML = template;
      hookEle.querySelector("h1")!.textContent = p.name;
    }
  };
};

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Jeff";

  constructor() {
    console.log("Creating person object...");
  }
}

const person1 = new Person();
const person2 = new Person();

// console.log(person1);
// console.log(person2);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log('Accessor decorator!')
//     console.log()
// }

class Product {
  @Log
  title: string;
  private price: number;

  set setPrice(val: number) {
    if (val > 0) {
      this.price = val;
    } else {
      console.log("Value must be greater than 0.");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}
