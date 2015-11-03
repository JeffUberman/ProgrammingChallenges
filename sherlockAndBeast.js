// Problem Statement from HackerRank

// Sherlock Holmes is getting paranoid about Professor Moriarty, his arch-enemy. All his efforts to subdue Moriarty have been in vain. These days Sherlock is working on a problem with Dr. Watson. Watson mentioned that the CIA has been facing weird problems with their supercomputer, 'The Beast', recently.

// This afternoon, Sherlock received a note from Moriarty, saying that he has infected 'The Beast' with a virus. Moreover, the note had the number N printed on it. After doing some calculations, Sherlock figured out that the key to remove the virus is the largest Decent Number having N digits.

// A Decent Number has the following properties:

// 3, 5, or both as its digits. No other digit is allowed.
// Number of times 3 appears is divisible by 5.
// Number of times 5 appears is divisible by 3.
// Meanwhile, the counter to the destruction of 'The Beast' is running very fast. Can you save 'The Beast', and find the key before Sherlock?

// Input Format
// The 1st line will contain an integer T, the number of test cases. This is followed by T lines, each containing an integer N. i.e. the number of digits in the number. 

// Output Format
// Largest Decent Number having N digits. If no such number exists, tell Sherlock that he is wrong and print −1.

// Constraints
// 1≤T≤20
// 1≤N≤100000


// Sample Input

// 4
// 1
// 3
// 5
// 11
// Sample Output

// -1
// 555
// 33333
// 55555533333

function processData(input) {
    var testCases = input.split('\n').map(function(item){return parseInt(item)}).slice(1);
    var output = '';
    
    for(var i = 0; i < testCases.length; i++){
        var test = '';
        var foundSolution = false;
        while(test.length < testCases[i]){test += '5'}
        for(var j = test.length - 1; j >= -1; j--){
            var threeCount = 0;
            var fiveCount = 0;
            for(var k = 0; k < test.length; k++){
              test[k] == 5 ? fiveCount++ : threeCount++;
            }
            if(threeCount % 5 === 0 && fiveCount % 3 === 0){
                output += test + '\n';
                foundSolution = true;
                break;            
            }
            else{
                test = test.substr(0, j) + '3' + test.substr(j + 1);
            }  
         }
        if(foundSolution === false){output += "-1\n"}
    }
    process.stdout.write(output.trim());
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