// interface Human {
//   name: string,
//   age: number,
//   job: string
// }

// const person = {
//   name: "Song",
//   age: 28,
//   job: "student"
// }

class Human {
  public name: string;
  public age: number;
  public job: string;
  constructor(name: string, age: number, job: string) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const person = new Human('YounJi', 28, 'student');

const sayhi = (person: Human): string => {
  return `My name is ${person.name}. I'm ${person.age}. And I am ${person.job}! lala`
}

console.log(sayhi(person))

export {}