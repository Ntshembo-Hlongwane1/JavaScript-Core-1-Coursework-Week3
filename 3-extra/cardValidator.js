const numberRegex = /^\d+$/;
const minLength = 5;

// - Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.

const isNumberMixed = (number) => {
  const seenMap = {};
  for (num of number) {
    if (seenMap[num] !== undefined) {
      seenMap[num] += 1;
    } else {
      seenMap[num] = 1;
    }
  }
  return Object.keys(seenMap).length > 1;
};

const cardValidator = (cardNumber) => {
  if (cardNumber.length !== 16) {
    return false;
  }

  if (!cardNumber.match(numberRegex)) {
    return false;
  }

  const isCardNumberMixed = isNumberMixed(cardNumber);
  if (!isCardNumberMixed) {
    return isCardNumberMixed;
  }

  const isLastDigitEven =
    parseInt(cardNumber[cardNumber.length - 1]) % 2 === 0 ? true : false;
  if (!isLastDigitEven) {
    return isLastDigitEven;
  }

  let sum = 0;
  for (num of cardNumber) {
    sum += parseInt(num);
  }

  if (sum < 16) {
    return false;
  }

  return true;
};

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("validate card number - case 1", cardValidator("a92332119c011112"), false);

test("validate card number - case 2", cardValidator("4444444444444444"), false);

test("validate card number - case 3", cardValidator("1111111111111110"), false);

test("validate card number - case 4", cardValidator("6666666666666661"), false);

test("validate card number - case 5", cardValidator("9999777788880000"), true);

test("validate card number - case 6", cardValidator("6666666666661666"), true);
