let value = "Az#1%45*e3a4"
let splitted = value.split("")
let upper = ""
let lower = ""
let number = ""
let special = ""
let x = 0
for (let index = 0; index < value.length; index++) 
{

    if(splitted[index]>='A' || 'Z'<=splitted[index])
    {
        // value = value.replace(splitted[index]," ")
        upper = upper + splitted[index]
    }
    else if(splitted[index]>='a' || 'z'<=splitted[index])
    {
        // value = value.replace(splitted[index]," ")
        lower = lower + splitted[index]
    }
   else if(splitted[index]>=0 || 9<=splitted[index])
    {
        if(x==index) // 0==3x, 1==5, 6==6, 7==9, 10==11
        {
            number = number+splitted[index]
            //ans----> ( 1 4)+5-----> ( 1 45)
        }
        else
        {
            number = number+" "+splitted[index]
            //ans----> ""+" "+1 ----> ( 1), ( 1 4), ( 1 45 3), ( 1 45 3 4)
        }
        x=index+1
    }
    else
    {
        // value = value.replace(splitted[index]," ")
        special = special + splitted[index]
    }
    
    
}

console.log(number);