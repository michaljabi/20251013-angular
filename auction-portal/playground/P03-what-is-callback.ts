// PROVIDER
function giveMeAValue(callback: (value: number) => void) { // function definition
  //callback(10);
  //callback(20);
  //callback(30);
  //return 10;
  setTimeout(() => {
    callback(500);
  }, 5000);
}

// CONSUMER
giveMeAValue((v: number) => { // function expression
  console.log(v);
});

//console.log(value);

console.log(20 + 311);
console.log(20 + 311);
console.log(20 + 2);

throw new Error('test');

console.log(20 + 311);
console.log(20 + 311);
