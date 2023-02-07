function family()
{
    return "Family Package Booked Successfully"
}
function friends()
{
    return "Friends Package Booked Successfully"
}
function bachelors()
{
    return "Bachelors Package Booked Successfully"
}
function couple()
{
    return "Couple Package Booked Successfully"
}
function operation(packages,func)
{
    if(packages=="friends")
    {
        console.log(func());
    }
    else if(packages=="family")
    {
        console.log(func());
    }
    else if(packages=="bachelors")
    {
        console.log(func());
    }
    else
    {
        console.log(func());
    }

} 
operation("couple",couple)