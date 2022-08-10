function my_Logic_Code("all inputs"){
  // Write your logic code here
}

function runProgram(input) {
  // Write input assigning code here
  input = input.trim().split('\n')
  let testcase= +input[0]
  let line=1
  for(let i=0;i<testcase;i++){
  my_Logic_Code("all inputs")
  }
}
  
if (process.env.USER === "") {
runProgram(``);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}