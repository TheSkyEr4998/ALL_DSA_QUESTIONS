function doit(input) {
    let lines = input.split('\n')
    let [n, r] = lines[0].trim().split(' ').map(Number)
    let arr = lines[1].trim().split(' ').map(Number)
    
    let dp = []
    
    for (let i = 0;i <= r;i++) {
        let temp = []
        for (let j = 0;j <= n;j++) {
            temp.push(false)
        }
        dp.push(temp)
    }
    
    for (let j = 0;j <= n;j++) {
        dp[0][j] = true
    }
    
    for (let i = 1;i <= r;i++) {
        dp[i][0] = false
    }
    
    for (let i = 1;i <= r;i++) {
        for(let j = 1;j <= n;j++) {
            dp[i][j] = dp[i][j - 1]
            if (i - arr[j - 1] >= 0 && !dp[i][j]) {
                dp[i][j] = dp[i - arr[j - 1]][j - 1]
            }
        }
    }
    
    if (dp[r][n]) {
        console.log("Party")
    } else {
        console.log("No Party")
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