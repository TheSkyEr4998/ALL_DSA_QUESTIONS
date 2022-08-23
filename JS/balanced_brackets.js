function check_it(s) {
    var stk = []
    
    for (var i = 0;i < s.length;i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stk.push(s[i])
        } else {
            if (stk.length == 0) {
                return "not balanced"
            }
            var top = stk.pop()
            if (s[i] == ')') {
                if(top != '(') {
                    return "not balanced"
                }
            }
            if (s[i] == '}') {
                if(top != '{') {
                    return "not balanced"
                }
            }
            if (s[i] == ']') {
                if(top != '[') {
                    return "not balanced"
                }
            }
        }
    }
    if (stk.length == 0) {
        return "balanced"
    } else {
        return "not balanced"
    }
}

function doit(input) {
    var lines = input.trim().split('\n')
    var line = 0
    var t = parseInt(lines[line])
    line ++
    
    while (t > 0) {
        
        var s = lines[line]
        
        console.log(check_it(s))
        
        line++
        t--
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