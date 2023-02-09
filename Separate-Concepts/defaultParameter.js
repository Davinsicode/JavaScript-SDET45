function state(state, country="INDIA") // Country is default parameter
{
    console.log("State is: "+state+" "+"Country is: "+country);
}

stateName="Kerala"

let states = ["TamilNadu","Karnataka","Kerala","AndhraPradesh"]
for (const index in states) 
{
    if(states[index]==stateName)
    {
        state(states[index])
    }    
}

