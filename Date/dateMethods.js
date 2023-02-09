let date = new Date

console.log("Current Date is : "+date.getDay()+" "+date.getDate()+" "+date.getMonth()+" "+date.getFullYear());

console.log("Current Time is : "+date.getHours()+" "+date.getMinutes()+" "+date.getSeconds());

today = date.toDateString().split(" ")
console.log(today);

