/*
Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.
*/

// console.log(process.argv);
const fs = require('fs');

function returnFileNewlines(file) {
  let fileContents = fs.readFileSync(file, {'encoding': 'utf8'});
  let fileContentsArr = fileContents.split('\n');
  console.log('fileContentsArr.length', fileContentsArr.length);
  // for (i = 0; i<fileContentsArr.length; i++) {
  //   console.log(fileContentsArr[i]);
  // }
  return;
};

// console.log(returnFileNewlines('/Users/brianzelip/NodeSchool/2017-05-13/learnyounode/test.md'));

returnFileNewlines('/Users/brianzelip/NodeSchool/2017-05-13/learnyounode/test.md');
