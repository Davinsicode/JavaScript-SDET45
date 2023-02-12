for (let i = 1; i <= 100; i++) 
{
    if(i%3==0 && i%5==0)
    {
    console.log("Multiple By 3&5 is: "+i);
    }
    else if(i%3==0)
    {
        console.log("Multiple By 3 is: "+i);
        
    }
    else if(i%5==0) 
    {
       console.log("Multiple By 5 is: "+i);
    }
    
    
}