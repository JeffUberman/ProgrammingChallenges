// Problem Statement from Hacker Rank

// You are given time in AM/PM format. Can you convert this into a 24-hour format?

// Input

// Input consists of time in the AM/PM format i.e. hh:mm:ssAM or hh:mm:ssPM 
// where 01≤hh≤12.

// Sample: 07:05:45PM

// Output

// You need to print the time in a 24-hour format i.e. hh:mm:ss 
// where 00≤hh≤23.

// Sample output for the above input: 19:05:45

// Note: Midnight is 12:00:00AM or 00:00:00. Noon is 12:00:00PM.

function processData(input) {
 var suffix = input.slice(-2);
 var splitTime = input.split(':');
 splitTime[2] = splitTime[2].slice(0, splitTime[2].length-2);
 if(splitTime[0] === '12' && suffix === 'AM') {
   splitTime[0] = '00';
 } 
 else if(suffix === 'PM' && splitTime[0] !== '12') {
   splitTime[0] = parseInt(splitTime[0]) + 12;
 }
   process.stdout.write(splitTime.join(':'));
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