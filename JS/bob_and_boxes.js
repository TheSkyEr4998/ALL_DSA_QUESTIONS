function count_it(n) {
    if (n == 0) {
        return 1
    }
    
    if (n < 0) {
        return 0
    }
    
    return count_it(n - 1) + count_it(n - 3) + count_it(n - 5)
}

function doit(input) {
    
    let n = parseInt(input)
    
    console.log(count_it(n))
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