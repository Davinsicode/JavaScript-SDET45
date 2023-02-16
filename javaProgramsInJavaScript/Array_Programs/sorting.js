var number = [1,2,5,4,1,4,4]
/* for(var i=0; i<number.length; i++)
{
    for( var j=i+1; j<number.length; j++)
    {
        if(number[i]<number[j])
        {
            var temp = number[j]
            number[j]=number[i]
            number[i]=temp
        }
    }
}
for(var i=0; i<number.length; i++)
{
    console.log(number[i]);
} */

//Inbuild Method to sort the values
console.log(number.sort((a,b) => (a-b)));