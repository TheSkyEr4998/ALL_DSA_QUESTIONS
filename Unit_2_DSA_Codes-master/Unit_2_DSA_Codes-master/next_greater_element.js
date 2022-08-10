function solve(arr, n) {
    arr.reverse()

    var stk = []
    var g = []
    
    for (var i = 0;i < n;i++) {
        while (stk.length > 0 && stk[stk.length - 1] <= arr[i]) {
            stk.pop()
        }
        if (stk.length == 0) {
            g.push(-1)
        } else {
            g.push(stk[stk.length - 1])
        }
        
        stk.push(arr[i])
    }
    console.log(g.reverse().join(' '))
}

function doit(input) {
    var lines = input.trim().split('\n')
    var t = parseInt(lines[0])
    var line = 1
    for (var i = 0;i < t;i++) {
        var n = parseInt(lines[line])
        var arr = lines[line + 1].trim().split(' ').map(Number)
        
        line += 2
        
        solve(arr, n)        
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