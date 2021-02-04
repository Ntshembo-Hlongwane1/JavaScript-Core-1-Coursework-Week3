/* 
  You are given a sentence contains a story.

  Current it says 

  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."

  Change the story using .replace() so that it says 

  "I like 'cats'. One 'night' I went to the park and I saw '100000' 'cats'. It was a 'brilliant' 'night'."
*/

let story =
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";

const replace = (str) => {
  let newStr = "";

  for (string of str.split(" ")) {
    console.log(string);
    if (string === "dogs.") {
      newStr += " " + "cats.";
    } else if (string === "day") {
      newStr += " " + "night";
    } else if (string === "day.") {
      newStr += " " + "night.";
    } else if (string === "10") {
      newStr += " " + "100000";
    } else if (string === "great") {
      newStr += " " + "brilliant";
    } else {
      newStr += " " + string;
    }
  }
  return newStr;
};

// let result = replace(story);
let result = story
  .replace(/dogs/g, "cats")
  .replace(/day/g, "night")
  .replace(10, 100000)
  .replace("great", "brilliant");

/* EXPECTED OUTPUT */

const util = require("util");

function test(test_name, actual, expected) {
  console.log("");
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: \nexpected: ${util.inspect(
      expected
    )} \nbut your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "1. Original story has not been changed",
  story,
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."
);

test(
  "2. The result of the replace is correct",
  story,
  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
);
