// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  const result = a + b
  console.log(`${process.hrtime()}  Adding ${a} and ${b} will result in ${result}`)
  return result;
}

export function randomNumber(): i8 {
  return i8(ceil(Math.random() * 6))
}

export function randomNumbers(numberOfRandomNumbers: i32): StaticArray<i8> {
  console.log(`WASM start generating ${numberOfRandomNumbers} random numbers.`)

  const resultArray = new StaticArray<i8>(numberOfRandomNumbers)
  for (let index = 0; index < numberOfRandomNumbers; index++) {
    resultArray[index] = randomNumber();
    
  }
  console.log(`WASM finished generating ${numberOfRandomNumbers} random numbers.`)
  return resultArray;
}

class Person {
  firstname: string;
  lastname: string;
}

export function createPerson(): Person {
  return {firstname: 'AFirstName', lastname: 'ALastName'}   ;
}