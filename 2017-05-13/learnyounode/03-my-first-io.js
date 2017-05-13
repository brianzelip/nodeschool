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
  // console.log('file', file);
  let fileContents = fs.readFileSync(file, {'encoding': 'utf8'});
  // console.log('fileContents', fileContents);
  let fileContentsArr = fileContents.split('');
  console.log('fileContentsArr', fileContentsArr);

  let count = 0;
  for (let i = 0; i<fileContentsArr; i++) {
    console.log('fileContentsArr[i]', fileContentsArr[i]);
    if (fileContentsArr[i] == 'h') {
      count = count + 1;
    }
  }
  // console.log('fileContentsArr.length', fileContentsArr.length);
  console.log('count', count);
  return count;
};

// console.log(returnFileNewlines('/Users/brianzelip/NodeSchool/2017-05-13/learnyounode/test.md'));

// returnFileNewlines('/Users/brianzelip/NodeSchool/2017-05-13/learnyounode/test.md');

returnFileNewlines('./test.md');
