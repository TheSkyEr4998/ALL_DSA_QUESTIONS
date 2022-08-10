function doit(input) {
    let lines = input.split('\n')
    let [n, k] = lines[0].trim().split(' ').map(Number)
    let heights = lines[1].trim().split(' ').map(Number)
    
    let dp = []
    
    for (let i = 0;i <= n;i++) {
        dp.push(10000000009)
    }
    
    dp[n - 1] = 0
    
    for (let i = n - 2;i >= 0;i--) {
        for (let step = 1;step <= k;step++) {
            if (i + step >= n) {
                break
            }
            dp[i] = Math.min(dp[i], Math.abs(heights[i] - heights[i + step]) + dp[i + step])
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