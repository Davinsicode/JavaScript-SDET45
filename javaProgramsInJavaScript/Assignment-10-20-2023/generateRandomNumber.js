// Range b/w 10 -20
// Formula --> max-min+1 = range --> range*random()+min
min = 10
max = 20
range = max-min+1

for(i=1; i<=10 ; i++)
{
    console.log(num = (Math.round)(range*Math.random()+min));
}
