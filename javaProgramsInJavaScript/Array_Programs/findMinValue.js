var number = [1,2,5,4,1,4,4]
var smallest = number[0]
for(var i=0; i<number.length; i++)
{
    if(smallest>number[i])
    {
        smallest=number[i]
    }
}
console.log(smallest);