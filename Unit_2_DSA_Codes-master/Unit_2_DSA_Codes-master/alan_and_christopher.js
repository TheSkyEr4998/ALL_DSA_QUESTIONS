function doit(input) {
    var lines = input.trim().split('\n')
    var n = parseInt(lines[0])
    
    for(var i=1;i<=n;i++) {
        var s = lines[i]
        
        var stk = []
        
        for (var j = 0;j < s.length;j++) {
            if (s[j] != '#') {
                stk.push(s[j])
            } else {
                stk.pop()
            }
        }
        
        console.log(stk.join(''))
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