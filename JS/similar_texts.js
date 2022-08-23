function doit(input) {
    let lines = input.split('\n')
    let a = lines[0].trim()
    let b = lines[1].trim()
    
    console.log(rec(a, b, 0, 0, 0))
}

function rec(a, b, ai, bi, cur) {
    if (ai >= a.length || bi >= b.length) {
        return cur
    }
    
    if (a[ai] == b[bi]) {
        return rec(a, b, ai + 1, bi + 1, cur + 1)
    }
    
    return Math.max(rec(a, b, ai + 1, bi, cur), rec(a, b, ai, bi + 1, cur))
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