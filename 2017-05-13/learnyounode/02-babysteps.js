/*

  Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

*/

// console.log(typeof(process.argv));


function addNumberArgs(arr) {
  let total = 0;
  for (let i = 2; i<arr.length; i++) {
    total = total + Number(arr[i]);
  };
  return total
};

console.log(addNumberArgs([3,2,1,4,5,6,7,8,9]));
// console.log(addNumberArgs(process.argv));

// console.log(typeof(process.argv[2]));

//
// function sumUnknownAmountOfNumbers(args) {
//   var total = 0;
//   for (let i = 0; i<args.length; i++) {
//     total = total + args[i];
//   }
//   return total;
// }
