let sentence = "i am an testyantra employee"
splitted = sentence.split(" ")

let value = splitted.map(value => value.split("")[0].toUpperCase()+value.slice(1)).join("")
console.log(value);
