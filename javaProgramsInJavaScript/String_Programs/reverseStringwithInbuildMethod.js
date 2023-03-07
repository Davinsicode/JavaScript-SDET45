let value = "I am employee of TestYantra"
ans = value.split(" ").map((msg)=>  msg.split('').reverse().join('')).join(" ")
console.log(ans);