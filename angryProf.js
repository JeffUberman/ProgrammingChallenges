// Problem Statement from Hacker Rank

// The professor is conducting a course on Discrete Mathematics to a class of N students. He is angry at the lack of their discipline, and he decides to cancel the class if there are fewer than K students present after the class starts.

// Given the arrival time of each student, your task is to find out if the class gets cancelled or not.

// Input Format

// The first line of the input contains T, the number of test cases. Each test case contains two lines. 
// The first line of each test case contains two space-separated integers, N and K. 
// The next line contains N space-separated integers, a1,a2,…,aN, representing the arrival time of each student.

// If the arrival time of a given student is a non-positive integer (ai≤0), then the student enters before the class starts. If the arrival time of a given student is a positive integer (ai>0), the student enters after the class has started.

// Output Format

// For each testcase, print "YES" (without quotes) if the class gets cancelled and "NO" (without quotes) otherwise.

// Constraints

// 1≤T≤10
// 1≤N≤1000
// 1≤K≤N
// −100≤ai≤100,where i∈[1,N]
// Note 
// If a student enters the class exactly when it starts (ai=0), the student is considered to have entered before the class has started.

function processData(input) {
    var __input = input.split("\n");
    var testCases = __input.slice(1);
    var parsed = [];
    var output = '';
    for(var i = 0; i < testCases.length; i++){
        var temp = testCases[i].split(' ').map(function(item){
            return parseInt(item);
        });
        parsed.push(temp);
    }

    for(var j = 0; j < parsed.length; j+=2){
        var threshold = parsed[j][1];
        var attendance = 0;
        for(var k = 0; k < parsed[j+1].length; k++){
            if(parsed[j+1][k] <= 0){attendance++;}
        }
        threshold <= attendance ? output += "NO" + "\n" : output += "YES" + "\n";
    }
    
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