function distinctSubstring(n,str){
  let result = new Set();
  for (let i = 0; i <= n; i++) {
      for (let j = i + 1; j <= n; j++) {
          result.add(str.substring(i, j));
      }
  }
  return result.size;
}

function runProgram(input) {
  // Write input assigning code here
  input = input.trim().split('\n')
  let t = +input[0]
  let line=1
  for(let i=0;i<t;i++){
      let N=+input[line]
      line++
      let string=input[line].trim()
      line++
      console.log(distinctSubstring(N,string))
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