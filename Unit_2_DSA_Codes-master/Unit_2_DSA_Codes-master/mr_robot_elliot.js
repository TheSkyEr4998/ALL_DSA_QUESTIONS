function enc(s) {
    if (s == "") {
        return ""
    }

    if (s.length == 1) {
        return s
    }
    
    var mid = parseInt((s.length - 1) / 2)
    return s[mid] + enc(s.slice(0, mid)) + enc(s.slice(mid + 1))
}

function doit(input) {
    var lines = input.split('\n')
    
    var t = parseInt(lines[0])
    var line = 1
    
    for(var i = 1;i <= t;i++) {
        var n = parseInt(lines[line])
        var s = lines[line + 1]
        line += 2
        console.log(enc(s))
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