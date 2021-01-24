//interface for anonymous function
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(readonly name: string, readonly age: number) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const user1 = new Person("Jeff", 30);
// user1.name = "Max";
user1.greet("Hi there");
