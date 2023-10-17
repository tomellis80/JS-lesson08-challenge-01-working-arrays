// Create array called 'hobbies' of at least 6 elements
var hobbies = [
  "dancing",
  "listening to music",
  "skating",
  "building keyboards",
  "watching Netflix",
  "playing Animal Crossing"
];

// Log out the length of your hobbies array
console.log(hobbies.length);

// Add a new hobby to the end of the array
hobbies.push("cooking");

// Log out 3rd element
console.log(hobbies[2]);

// Remove of the last element
hobbies.pop();

// Add 2 new elements after the 3 element
hobbies.splice(2, 0, "paragliding", "board games");

// Log out the array
console.log(hobbies);

// Remove first element
hobbies.shift();

// Use 'unshift' to add a goal to the beginning of the array
hobbies.unshift("painting");

// Create another array called goals with at least three elements
var goals = ["Run 5 miles", "Build a React App", "Learn Next.js"];

// Create a variable called allTheThings and combine arrays using the concat() or the spread operator.
// var allTheThings = hobbies.concat(goals);
var allTheThings = [...hobbies, ...goals];

// Console out the array
console.log(allTheThings);

// Choose an element in the middle of your 'allTheThings' array and find its index using 'indexOf'
console.log(allTheThings.indexOf("skating"));

// Using the index you discovered, remove that element
allTheThings.splice(8, 1);

// Log out 'allTheThings' to confirm that it is gone
console.log(allTheThings);

// Use map() to add 'I can't wait to start' to the beginning of each array element
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);
