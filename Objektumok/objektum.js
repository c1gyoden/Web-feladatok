const person = {
    name: "Alice",
    age: 19,
    city: "Szeged",
    driverLicen: true
}

console.log(person)
console.table(person)

const keys = Object.keys(person)
console.log(keys)

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)

for (const key in person){
    console.log(`Key: ${key} >> value: ${person[key]}`)
}