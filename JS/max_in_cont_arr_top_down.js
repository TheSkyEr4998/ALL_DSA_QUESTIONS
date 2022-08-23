function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    while(t--) {
        let [n] = lines[line].trim().split(' ').map(Number)
        line++
        let arr = lines[line].trim().split(' ').map(Number)
        line++
        dp = {}
        rec(arr, n - 1, dp)
        let ans = arr[0]
        for (k in dp) {
            ans = Math.max(ans, dp[k])
        }
        console.log(ans)
        
    }
    
}

function rec(arr, cur, dp) {
    if (cur < 0) {
        return 0
    }
    
    if (cur in dp) {
        return dp[cur]
    }
    
    let ans = Math.max(arr[cur], arr[cur] + rec(arr, cur - 1, dp))
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