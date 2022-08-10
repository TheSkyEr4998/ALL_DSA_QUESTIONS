function fact(n) {
    if (n == 0) {
        return 1
    }
    
    return n * fact(n - 1)
}

function doit(input) {
    var n = parseInt(input)
    
    console.log(fact(n))
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