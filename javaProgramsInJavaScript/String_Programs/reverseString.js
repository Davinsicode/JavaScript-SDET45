let value = "testyantra"
let reverse = ""
for (let key in value) 
{
   reverse = value[key]+reverse
}
console.log(reverse);