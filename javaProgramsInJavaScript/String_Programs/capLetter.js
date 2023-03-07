let str = "testyantra";
let value =""
		
		for(let i=0; i<str.length; i++)
		{
			if(str[i]=='t')
			{
				// console.log(str[i].toUpperCase());
				value = value+str[i].toUpperCase()
                
            }
            else
            {
                // console.log(str[i]);
				value = value+str[i]
            }
			
			
		}
		console.log(value);