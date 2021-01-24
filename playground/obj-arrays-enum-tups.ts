// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // Type: Tuple
//   role: [number, string];
// } = {
//   name: "Jeff",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
//TS incorrectly allows us to push onto Tuples. It will not let us change type though
// person.role.push("bad");

//starts number assignment at 1, rather than 0
enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

enum Role2 {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Jeff",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  //not the same as role: Role[2], which sets role to type string
  role: Role.AUTHOR,
  role2: Role2["AUTHOR"],
};

// let favoriteActivities: any[]; is not equal to the inferred array type using |
const favoriteActivities = ["Sports", "jeff", 3, true];

console.log(person.name);

// TS knows that hobby is a string
for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

// if (person.role === Role.AUTHOR) {
//   console.log("is admin");
// }

console.log(person.role2);
if (person.role2 === Role2.AUTHOR) {
  console.log("is admin");
}
