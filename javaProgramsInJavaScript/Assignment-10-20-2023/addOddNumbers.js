let array = [3,4,6,8,7,5]
let sum = 0
for (let index = 0; index < array.length; index++) 
{
    if(array[index]%2==1)
    {
        sum = sum+array[index]
    }
}
console.log("Sum of the Odd number is : "+sum);