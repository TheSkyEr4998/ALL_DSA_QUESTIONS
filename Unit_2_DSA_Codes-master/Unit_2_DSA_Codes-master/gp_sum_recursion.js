function gp_sum(n, r, cur) {
    
    if (cur > n) {
        return 0
    }
    
    return (1 / (Math.pow(r, cur))) + gp_sum(n, r, cur + 1)
}

function doit(input) {
    var [n, r] = input.split(' ').map(Number)
    
    console.log(Number(gp_sum(n, r, 0)).toFixed(4))
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