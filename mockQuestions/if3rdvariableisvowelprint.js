// Type:1
/* // if the 3rd variable is vowels then make the words 1st letter as capital and print
let valuee = "good morning welcome to javascript".split(" ")

for (let i = 0; i < valuee.length; i++) 
{
   
   if(valuee[i].charAt(2)=='a' || valuee[i].charAt(2)=='e' || valuee[i].charAt(2)=='i' || valuee[i].charAt(2)=='o' || valuee[i].charAt(2)=='u')
   {
    valuee[i] = valuee[i].charAt(0).toUpperCase()+valuee[i].slice(1)
    
   }
   console.log(valuee[i]);
} */



/* // print vowels value and store into the array
let value = "goodmorning".split("")
vowels = []
for (const iterator of value) 
{
    if('aeiou'.includes(iterator))
    {
        vowels.push(iterator)  
    }
    
}
console.log(vowels); */