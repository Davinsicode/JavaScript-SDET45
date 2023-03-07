let value = "sureshkumar"
console.log("slice value is :"+value.slice(1));
console.log("substring value is :"+value.substring(1));

ans = value.charAt(0).toUpperCase()+value.substring(1)
console.log(ans);

ans1 = value.charAt(0).toUpperCase()+value.slice(1)
console.log(ans1);