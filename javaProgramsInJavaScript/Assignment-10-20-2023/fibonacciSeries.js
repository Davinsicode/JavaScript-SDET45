fib1 = 0
fib2 = 1
fib3 = 0
for (let index = 1; index <= 15; index++) 
{
    fib3=fib1+fib2;
    fib1=fib2
    fib2=fib3
    console.log(fib3);
    
}