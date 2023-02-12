let values = "I am an employee of TestYantra"

for (const key in values) 
{
    if(values.charAt(key)>'A' && values.charAt(key)<='Z')
    {
        console.log(values.charAt(key));
    }
        
}