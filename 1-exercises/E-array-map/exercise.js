// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const multiples100_1 = numbers.map((num) => num * 100);

const multiples100_2 = [];
const multiples100_3 = [];
numbers.forEach((value) => {
  multiples100_2.push(value * 100);
});

for (num of numbers) {
  multiples100_3.push(num * 100);
}

console.log(multiples100_1);
console.log(multiples100_2);
console.log(multiples100_3);
