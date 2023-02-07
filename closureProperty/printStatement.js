var a = 10
let b = 20
const c = 30
{
    var x = 40
    let y = 50
    const z = 60
    console.log(a); console.log(b); console.log(c);
    console.log(x); console.log(y); console.log(z);
}
function closure()
{
    var m = 40
    let n = 50
    const o = 60
    console.log("Third Output");
    console.log(a); console.log(b); console.log(c);
    // console.log(x); console.log(y); console.log(z);
    // console.log(m); console.log(n); console.log(o);
}
    closure()
    console.log("Second Output");
    console.log(a); console.log(b); console.log(c);
 // console.log(x); console.log(y); console.log(z);
    console.log(m); console.log(n); console.log(o);

    