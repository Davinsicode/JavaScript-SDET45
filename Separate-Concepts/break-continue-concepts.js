let array = [1,3,5,7,9]

// break will get out the loop oncethe condition is satisfied
/* for (let index = 0; index < array.length; index++) 
{
    if(array[index]==5)
    {
        break
    }    
    console.log(array[index]);
} */


// Continue will remove only the given number it will print remaing all number
for (let index = 0; index < array.length; index++) 
{
    if(array[index]==5)
    {
        continue
    }    
    console.log(array[index]);
}

