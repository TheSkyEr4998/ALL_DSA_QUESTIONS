function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let [s, n] = lines[line].trim().split(' ').map(Number)
        line ++
        let arr = []
        for (let i = 0;i < n;i++) {
            arr.push(lines[line].trim().split(' ').map(Number))
            line ++
        }
        
        let dp = []
        for (let i = 0;i < n;i++) {
            let temp = []
            for (let j = 0;j <= s;j++) {
                temp.push(0)
            }
            dp.push(temp)
        }
        
        for (let j = 1;j <= s;j++) {
            if (arr[0][0] <= 1) {
                dp[0][j] = arr[0][1]
            }
        }
        
        for (let i = 1;i < n;i++) {
            for (let j = 1;j <= s;j++) {
                let ans = dp[i - 1][j]
                if (j - arr[i][0] >= 0) {
                    ans = Math.max(ans, arr[i][1] + dp[i - 1][j - arr[i][0]])
                }
                dp[i][j] = ans
            }
        }
        
        console.log(dp[n - 1][s])
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