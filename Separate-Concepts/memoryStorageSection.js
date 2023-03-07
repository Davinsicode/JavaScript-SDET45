// Values are declared and initialized Globally

var a = 10
console.log(a);

let b = 20
console.log(b);

const c = 30
console.log(c);

//************************************************************************************************************************* */

// Values are declared and initialized in Block

{
    var x = 40
    let y = 50
    const z = 60
}

//************************************************************************************************************************* */

// Values are declared and initialized in Functions

function add(m,n) 
{
    let o = m+n
    console.log(o);
    
    var p = 70
    let q = 80
    const r = 90
}

add(1,2)

// Export these JS to external html start debugging and check the memory blocks which is created for the declared values?