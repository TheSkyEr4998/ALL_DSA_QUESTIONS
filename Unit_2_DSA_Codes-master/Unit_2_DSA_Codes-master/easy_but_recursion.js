function sum(arr, cur) {
    if (cur >= arr.length) {
        return 0
    }
    
    return arr[cur] + sum(arr, cur + 1)
}

function doit(input) {
    var lines = input.split('\n')
    
    var t = parseInt(lines[0])
    var line = 1
    
    for(var i = 1;i <= t;i++) {
        var n = parseInt(lines[line])
        var arr = lines[line + 1].split(' ').map(Number)
        line += 2
        console.log(sum(arr, 0))
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