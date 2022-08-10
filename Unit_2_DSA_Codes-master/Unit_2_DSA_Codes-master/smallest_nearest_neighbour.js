function doit(input) {
    var lines = input.trim().split('\n')
    var n = parseInt(lines[0])
    var arr = lines[1].trim().split(' ').map(Number)
    
    var stk = []
    var g = []
    
    for (var i = 0;i < n;i++) {
        while (stk.length > 0 && stk[stk.length - 1] >= arr[i]) {
            stk.pop()
        }
        if (stk.length == 0) {
            g.push(-1)
        } else {
            g.push(stk[stk.length - 1])
        }
        
        stk.push(arr[i])
    }
    console.log(g.join(' '))
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