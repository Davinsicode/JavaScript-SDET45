let value = "Az#1%45*e3a4"
let splitted = value.split("")

for (let index = 0; index < value.length; index++) 
{

    if(splitted[index]>='A' || 'Z'<=splitted[index])
    {
        value = value.replace(splitted[index]," ")
    }
    else if(splitted[index]>='a' || 'z'<=splitted[index])
    {
        value = value.replace(splitted[index]," ")
    }
   else if(splitted[index]>=0 || 9<=splitted[index])
    {
        
    }
    else
    {
        value = value.replace(splitted[index]," ")
    }
    
    
}
splittedNumber = value.split(" ")
let sum = 0
for (let index = 0; index < splittedNumber.length; index++) 
{
    if(splittedNumber[index]>0)
    {
        let ans = splittedNumber[index]
    
        sum = sum+Number(ans)
        //console.log(splittedNumber[index]);
    }
    
    
    
}

console.log("Sum of the Number is: "+sum);