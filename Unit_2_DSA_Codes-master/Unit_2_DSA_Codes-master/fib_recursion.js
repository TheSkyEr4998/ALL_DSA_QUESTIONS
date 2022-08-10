function fib(n) {
    if (n == 1 || n == 2) {
        return 1
    }
    
    return fib(n - 1) + fib(n - 2)
}

function doit(input) {
    var n = parseInt(input)
    
    console.log(fib(n))
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    
    doit(read)
});