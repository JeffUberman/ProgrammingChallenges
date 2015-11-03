// Problem Statement from HackerRank

// You are given a square matrix of size N×N. Can you calculate the absolute difference of the sums across the two main diagonals?

// Input Format

// The first line contains a single integer N. The next N lines contain the rows of N integers describing the matrix.

// Output Format

// Output a single integer equal to the absolute difference in the sums across the diagonals.

function processData(input) {
    var sum1 = 0;
    var sum2 = 0;
    var __input = input.split('\n');
    var arr = [];
    for(var i = 1; i < __input.length; i++){
        arr.push(__input[i].split(' '));
    }
    for(var j = 0; j < arr.length; j++){
        sum1 += parseInt(arr[j][j]);
    }
    var row = 0;
    for(var k = arr.length-1; k >= 0; k--){
        sum2 += parseInt(arr[row][k]);
        row++;
    }
    var result = Math.abs(sum1 - sum2);
    process.stdout.write(result);
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