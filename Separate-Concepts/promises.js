async function sync()
{  
    console.log("login to application");

    var ref = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("In progress")
            reject("rejected")
        }, 3000);
    })
    await ref.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

   /*  var ref = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Clicked")
            reject("rejected")
        }, 3000);
    })
    await ref.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);}) */

    console.log("logout the application");
}
sync()