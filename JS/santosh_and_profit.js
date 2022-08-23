function count_it(n) {
    if (n == 0) {
        return 1
    }
    
    if (n < 0) {
        return 0
    }
    
    return count_it(n - 4) + count_it(n - 8)
}

function doit(input) {
    
    let lines = input.split('\n')
    
    let t = parseInt(lines[0])
    
    for (let i = 1;i <= t;i++) {
        let n = parseInt(lines[i])
        
        console.log(count_it(n))
    }
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