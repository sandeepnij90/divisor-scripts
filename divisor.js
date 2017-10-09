function divisors(integer) {
  if(isNaN(integer)) {
    alert("please enter a number");
  } else {
    const arr = [];
    let counter = 2;
    while(counter !== integer) {
      integer % counter == 0 ? arr.push(counter) : '';
      counter++;
      console.log("in loop");
    }
    return arr.length == 0 ? `${integer} is a prime number` : arr;
  }
};
console.table(divisors(12)); // should return [2,3,4,6]
