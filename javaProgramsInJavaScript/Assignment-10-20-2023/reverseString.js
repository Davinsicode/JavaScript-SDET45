let ans = "I am an employee of TestYantra"
array = ans.split(" ")
for (let i = 0; i < array.length; i++) 
{
    rev = array[i].split("").reverse()
    console.log(`${rev.join("")} `);
    
}