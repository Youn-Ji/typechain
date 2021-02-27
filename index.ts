const name =  'younji',
  age = 28,
  gender = 'female'

const sayhi = (name, age, gender?) => {
  console.log(`My name is ${name}. I'm ${age}. And I am ${gender}`)
}

sayhi(name, age)

export {}