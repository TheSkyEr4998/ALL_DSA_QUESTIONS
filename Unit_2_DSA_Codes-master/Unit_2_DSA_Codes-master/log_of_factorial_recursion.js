function log_fact(n) {
    if (n == 1) {
        return Math.log(1)
    }
    
    return Math.log(n) + log_fact(n - 1)
}

function doit(input) {
    var n = parseInt(input)
    
    console.log(Number(log_fact(n)).toFixed(4))
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