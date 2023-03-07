const checkRange = (num)=>{
    if (num < 30) throw new RangeError("Wrong number");
    return true
  }
  
  checkRange(20);
  