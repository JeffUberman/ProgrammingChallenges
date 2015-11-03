// Problem Statement from Hacker Rank

// Your teacher has given you the task of drawing a staircase structure. Being an expert programmer, you decided to make a program to draw it for you instead. Given the required height, can you print a staircase as shown in the example?

// Input 
// You are given an integer N depicting the height of the staircase.

// Output 
// Print a staircase of height N that consists of # symbols and spaces. For example for N=6, here's a staircase of that height:

//      #
//     ##
//    ###
//   ####
//  #####
// ######

function processData(input) {
    var height = parseInt(input);
    var output = '';
    
    for(var i = 0; i < height; i++){
        var count = 1;
        while(count < height - i){
            output += ' ';
            count++;
        }
        while(count >= height - i && count <= height){
            output += "#";
            count++;
        }
        i === height - 1 ? output += '' : output += "\n";
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