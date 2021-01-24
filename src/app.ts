//interface for anonymous function
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name: string;
  surname?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
  surname?: string;
}

class Person implements Greetable {
  constructor(
    readonly name: string,
    readonly age: number,
    readonly surname?: string
  ) {}

  greet(phrase: string) {
    const surname = this.surname ? this.surname : "";
    console.log(`${phrase} ${this.name} ${surname}`);
  }
}

const user1 = new Person("Jeff", 30);
user1.greet("Hi there");

const user2 = new Person("John", 30, "Pramp");
user2.greet("Hello");
