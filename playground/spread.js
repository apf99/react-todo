// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd))

//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);


var person = ['Andrew', 46];
var personTwo = ['Jenn', 49];
// Hi Andrew, you are 46
function greet(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet (...person);
greet (...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
// Hi Andrew
final.forEach(function (name) {
  console.log('Hi ' + name);
});
