function doit(input) {
    let lines = input.split('\n')
    
    for (let i = 0;i < lines.length;i++) {
        let n = parseInt(lines[i])
        console.log(rec(n, {}))
    }
}

function rec(cur, dp) {
    if (cur <= 0) {
        return 0
    }
    
    if (cur in dp) {
        return dp[cur]
    }
    
    let ans = cur
    
    ans = Math.max(ans, rec(parseInt(cur / 2), dp) + rec(parseInt(cur / 3), dp) + rec(parseInt(cur / 4), dp))
    
    dp[cur] = ans
    
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