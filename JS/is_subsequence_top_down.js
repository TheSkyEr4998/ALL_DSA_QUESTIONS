function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let s1 = lines[line].trim()
        line++
        let s2 = lines[line].trim()
        line++
        
        if (rec(s1, s2, 0, 0, {})) {
            console.log("YES")
        } else {
            console.log("NO")
        }
    }
}

function rec(s1, s2, s1i, s2i, dp) {
    if (s1i >= s1.length) {
        return true
    }
    
    if (s2i >= s2.length) {
        return false
    }
    
    if ([s1i, s2i] in dp) {
        return dp[[s1i, s2i]]
    }
    
    let ans = false
    
    if (s1[s1i] == s2[s2i]) {
        ans = rec(s1, s2, s1i + 1, s2i + 1, dp)
    } else {
        ans = rec(s1, s2, s1i, s2i + 1, dp)
    }
    
    dp[[s1i, s2i]] = ans
    
    return ans
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