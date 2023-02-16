let array = "hi my name is suresh"

/* // 1. Make the 1st letter as UpperCase
for(i=0; i<array.length; i++)
{
 ans = array.split(" ").map(value => value.charAt(0).toUpperCase()+value.slice(1))//.join("")
}
console.log(ans); */

//=========================================================================================================

/* // 2. If the 3rd variable is vowels then make that word 1st letter as upperCase

let vowels = ['a','e','i','o','u']

ans = array.split(" ").map(value => 
  {
    for(i=0; i<vowels.length; i++)
    {
      if(value.charAt(3)==vowels[i])
      {
        value = value.charAt(0).toUpperCase()+value.slice(1)
      }
    }
    return value
  }
  ).join(" ")
  console.log(ans); */

  //==========================================================================================================

  // 3. Make vowels as uppercase
ans = array.split("").map(value => 
  {
    if('aeiou'.includes(value))
    {
      return value.toUpperCase()
    }
    else
    {
      return value
    }
  }
  ).join("")
  console.log(ans);  

