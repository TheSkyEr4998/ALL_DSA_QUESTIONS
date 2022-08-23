function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let s = lines[line]
        line++
        let new_s = lines[line]
        line++
        
        console.log(rec(s, new_s, 0, 0, {}))
    }
}

function rec(s, new_s, si, nsi, dp) {
    if (nsi >= new_s.length && si >= s.length) {
        return 0
    }
    
    if (si >= s.length) {
        return 1 + rec(s, new_s, si, nsi + 1, dp)
    }
    
    if (nsi >= new_s.length) {
        return 1 + rec(s, new_s, si + 1, nsi, dp)
    }
    
    if ([si, nsi] in dp) {
        return dp[[si, nsi]]
    }
    
    if (s[si] == new_s[nsi]) {
        return rec(s, new_s, si + 1, nsi + 1, dp)
    }
    
    let ans = rec(s, new_s, si, nsi + 1, dp)
    ans = Math.min(ans, rec(s, new_s, si + 1, nsi, dp))
    ans = Math.min(ans, rec(s, new_s, si + 1, nsi + 1, dp))
    
    dp[[si, nsi]] = ans + 1
    
    return ans + 1
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