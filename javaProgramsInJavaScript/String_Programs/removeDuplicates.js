let str = "testyantra"
 value = str.split('')
for(let i =0; i<value.length; i++)
{
    for(let j=i+1; j<value.length; j++)
    {
        if(value[i]==value[j])
        {
            value.splice(j,1)
        }
      
    }
    
}

console.log(value);