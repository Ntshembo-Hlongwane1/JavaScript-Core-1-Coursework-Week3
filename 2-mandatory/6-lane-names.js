/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

function getLanes(arr) {
  const result = [];

  for (string of arr) {
    let stringArr = string.split(" ");
    let laneIndex = stringArr.indexOf("Lane");

    if (laneIndex !== -1) {
      result.push(string);
    }
  }
  return result;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const streetNames = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
];

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

test("getLanes function works", getLanes(streetNames), [
  "Abchurch Lane",
  "Addle Lane",
]);
