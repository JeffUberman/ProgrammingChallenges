// Problem Statement from HackerRank

// You're given an array of integers. Can you find what fraction of the elements are positive numbers, negative numbers and zeroes? Print the value of the fractions in decimal form with 3 decimal places.

// Input Format

// The first line contains N: the size of the array. 
// The next line contains N space-separated integers A1,A2,A3,⋯,AN.

// Output Format

// Output the three values each on a different line. The first value shows the fraction of the count of positive numbers to the total numbers, the second shows the fraction of negative numbers, and the third represents the fraction of zeroes. Correct the fraction to 3 decimal places.

function processData(input) {
    var parsed = input.split('\n');
    var num = parseInt(parsed[0]);
    var arr = parsed[1].split(' ');
    var pos = 0, neg = 0, zero = 0;

    for(var i = 0; i < arr.length; i++){
        var temp = parseInt(arr[i]);
        if(temp > 0){
            pos++;
        }
        if(temp < 0){
            neg++;
        }
        if(temp === 0){
            zero++;
        }
    }
    
    var output = "";
    output += pos/num + '\n';
    output += neg/num + '\n';
    output += zero/num + '\n';
    
    process.stdout.write(output);
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