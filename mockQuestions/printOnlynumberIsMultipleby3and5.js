let number = [1,2,3,4,5,6,7,8,9,10,20]
for (let index = 0; index < number.length; index++) 
{
    if(number[index]%5==0 && number[index]%10==0)
    {
        console.log("Multiple by both 5 & 10 is : "+number[index]);
    }
    else if(number[index]%5==0)
    {
        console.log("Multiple by 5 is : "+number[index]);
    }
   
}
