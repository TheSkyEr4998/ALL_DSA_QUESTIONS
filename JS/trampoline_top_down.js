function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    
    /*
    state - cur trampoline
    cur -> cur + 1
        -> cur + 2
        ...
        -> cur + arr[cur]
        
    if cur >= n -> infinity (no way to jump backwards)
    if cur == n - 1 -> 0 (you are already at the end)
    */
    
    console.log(rec(arr, 0, {}))
}

function rec(arr, cur, dp) {
    if (cur >= arr.length) {
        return 10000000008
    }
    
    if (cur == arr.length - 1) {
        return 0
    }
    
    if (cur in dp) {
        return dp[cur]
    }
    
    let ans = 10000000008
    for (let i = 1;i <= arr[cur];i++) {
        ans = Math.min(ans, rec(arr, cur + i, dp))
    }
    
    dp[cur] = ans + 1
    
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