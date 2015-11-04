// Problem Statement from HackerRank

// An array is a series of elements of the same type placed in contiguous memory locations that can be individually referenced by adding an index to a unique identifier.

// You'll be given an array of N integers, and you have to print the integers in reverse order.

// Note: If you have already solved the problem "Arrays Introduction" in the Introduction chapter of the C++ domain, you may skip this challenge.

// Input Format

// The first line of input contains N, the number of integers. The next line contains N integers separated by a space.

// Constraints

// 1<=N<=1000
// 1<=Ai<=10000, where Ai is the ith integer in the array.

// Output Format

// Print the N integers of the array in the reverse order on a single line separated by single spaces.

function processData(input) {
    var __input = input.split('\n').map(function(i) { return i.split(' ')})[1];
    process.stdout.write(__input.reverse().join(' ').trim());
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});