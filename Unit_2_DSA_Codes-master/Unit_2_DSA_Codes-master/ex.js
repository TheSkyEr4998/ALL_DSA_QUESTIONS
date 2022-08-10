function fact(n) {
    if (n == 1) {
        return 1
    }
    
    return n * fact(n - 1)
}

function ex(x, n) {
    if (n == 0) {
        return 1
    }
    
    return ((1 / fact(n)) * Math.pow(x, n)) + ex(x, n - 1)
}

function doit(input) {
    var [x, n] = input.split(' ').map(Number)
    
    console.log(Number(ex(x, n)).toFixed(4))
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