const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [6, 7, 8, 9, 10];

const allNumbers = [...numbers, ...moreNumbers];

console.log(numbers);
console.log(moreNumbers);
console.log(allNumbers);

const myFunction = function() {
  console.log([...arguments]);
}

myFunction("hello", "fish", 8, true);