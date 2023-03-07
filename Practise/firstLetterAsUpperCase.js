var name = "my name is suresh kumar".split(" ")
for (let index = 0; index < name.length; index++) 
{
    name[index] = name[index].charAt(0).toUpperCase()+name[index].slice(1)
    console.log(name[index]);
}