var number = [1,2,5,4,1,4,4]

var largest=number[0]

/* for(var i=0; i<number.length; i++)
{
        if(largest<number[i])
        {
           largest=number[i]
        }
}

    console.log(largest); */

// Inbuild Method to find the Max Number in the given Array
console.log(Math.max(...number));
