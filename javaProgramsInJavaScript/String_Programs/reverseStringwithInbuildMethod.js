let value = "I am employee of TestYantra"
splitted = value.split(" ").map((value=>value.split('').reverse().join(''))).join(" ")
console.log("Reversed values is: "+splitted);