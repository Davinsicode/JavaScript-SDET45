// Ascending Order
const pointAsc = [40,100,1,5,25,10]
pointAsc.sort(function(a,b)
{
    return a-b
})
console.log(pointAsc);

// Descending
const pointDsc = [40,100,1,5,25,10]
pointDsc.sort(function(a,b)
{
    return b-a
})
console.log(pointDsc);