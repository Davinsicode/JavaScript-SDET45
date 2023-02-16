let array = "good morning"

let fians = array.split("").map(value=>{ 
        if('aeiou'.includes(value))
        {
            return value.toUpperCase()
        }
        else
        {
            return value
        }
}).join("")
    console.log(fians);
