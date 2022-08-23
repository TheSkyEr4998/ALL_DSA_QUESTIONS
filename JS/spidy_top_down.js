function doit(input) {
    let lines = input.split('\n')
    let [n, k] = lines[0].trim().split(' ').map(Number)
    let heights = lines[1].trim().split(' ').map(Number)
    
    console.log(rec(heights, k, 0, {}))
}

function rec(heights, k, cur, dp) {
    if (cur == heights.length - 1) {
        return 0
    }
    
    if (cur >= heights.length) {
        return 10000000009
    }
    
    if (cur in dp) {
        return dp[cur]
    }
    
    let ans = 10000000009
    
    for (let i = 1;i <= k;i++) {
        if (cur + i < heights.length) {
            ans = Math.min(ans, Math.abs(heights[cur] - heights[cur + i]) + rec(heights, k, cur + i, dp))
        } else {
            break
        }
    }
    
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