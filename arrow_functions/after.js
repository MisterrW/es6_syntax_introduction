const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => 
 num*num);

//note: this form only if one parameter, one statement inside function body. Adding more parameters = require brackets around eg:

const squares = numbers.map((num, index) => 
 num*num);

//Adding more statements inside body = require return statement as lose implicit return, also need to replace curly brackets:

const squares = numbers.map((num, index) => 
 {console.log(index);
  return num*num;
});

console.log(squares);