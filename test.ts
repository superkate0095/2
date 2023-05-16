interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const john: Person = {
  name: 'John Doe',
  age: 25,
};

greet(john);
