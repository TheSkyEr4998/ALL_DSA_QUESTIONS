function can_reach_n(n, cur) {
    if (cur == n) {
        return true
    }
    
    if (cur > n) {
        return false
    }
    
    return can_reach_n(n, cur * 10) || can_reach_n(n, cur * 20)
}

function doit(input) {
    var lines = input.split('\n')
    
    var t = parseInt(lines[0])
    
    for(var i = 1;i <= t;i++) {
        var n = parseInt(lines[i])
        
        if (can_reach_n(n, 1)) {
            console.log("Yes")
        } else {
            console.log("No")
        }
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