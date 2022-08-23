function count_it(max_steps, cur) {
    if (cur == max_steps) {
        return 1
    }
    
    if (cur > max_steps) {
        return 0
    }
    
    return count_it(max_steps, cur + 1)
            + count_it(max_steps, cur + 2)
            + count_it(max_steps, cur + 3)
}

function doit(input) {
    var n = parseInt(input)
    
    console.log(count_it(n, 0))
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