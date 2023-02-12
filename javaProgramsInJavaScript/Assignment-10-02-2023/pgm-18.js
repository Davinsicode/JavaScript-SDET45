// Question
/* (function () 
{
   a=b=c=5
   
})
console.log(b); //--> ReferenceError */

// Answer
(function () 
{
   a=b=c=5
   
})() // --> We need to use here function calling properly
console.log(b);