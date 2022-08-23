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
    
    let dp = []
    for (let i = 0;i < n;i++) {
        dp.push(10000000008)
    }
    
    dp[n - 1] = 0
    
    for (let i = n - 2;i >=0 ;i--) {
        for (let j = 1;j <= arr[i];j++) {
            if (i + j >= n) {
                break
            }
            dp[i] = Math.min(dp[i], 1 + dp[i + j])
        }
    }
    
    console.log(dp[0])
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