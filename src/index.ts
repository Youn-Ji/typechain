interface Human {
  name: string,
  age: number,
  job: string
}

const person = {
  name: "Song",
  age: 28,
  job: "student"
}


const sayhi = (person: Human): string => {
  return `My name is ${person.name}. I'm ${person.age}. And I am ${person.job}! lala`
}

console.log(sayhi(person))

export {}