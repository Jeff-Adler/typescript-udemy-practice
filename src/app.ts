interface Greetable {
  private name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(private name: string, private age: number) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const user1 = new Person("Jeff", 30);
user1.greet("Hi there");
