const sayhi = (name: string, age: number, gender?: string): string => {
  return `My name is ${name}. I'm ${age}. And I am ${gender}! lala`
}

console.log(sayhi('YounJi', 28, 'Female'))

export {}