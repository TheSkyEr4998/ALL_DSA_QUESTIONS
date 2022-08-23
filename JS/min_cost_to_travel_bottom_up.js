function doit(input) {
    let days = 365
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    while(t--) {
        let c = lines[line].trim().split(' ').map(Number)
        line++
        let n = parseInt(lines[line])
        line++
        let arr = lines[line].trim().split(' ').map(Number)
        line++
        
        let dp = [];
        for (let i = 0; i <= days; i++) {
            dp.push(new Array(arr.length + 1).fill(10000000008));
        }
        
        for (let i = 0;i <= days;i++) {
            dp[i][dp[i].length - 1] = 0
        }
        
        for (let i = days;i > 0;i --) {
            // console.log(i)
            // console.log(dp[i])
            for (let j = dp[i].length - 2;j >= 0;j--) {
                let ans = dp[i][j]
                let buy_day = i
                if (i > arr[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][j + 1])
                } else {
                    buy_day = arr[j]
                }
                
                if (buy_day + 1 <= days) {
                    dp[i][j] = Math.min(dp[i][j], c[0] + dp[buy_day + 1][j + 1])
                } else {
                    dp[i][j] = Math.min(dp[i][j], c[0] + 0)
                }
                
                if (buy_day + 7 <= days) {
                    dp[i][j] = Math.min(dp[i][j], c[1] + dp[buy_day + 7][j + 1])
                } else {
                    dp[i][j] = Math.min(dp[i][j], c[1] + 0)
                }
                
                if (buy_day + 30 <= days) {
                    dp[i][j] = Math.min(dp[i][j], c[2] + dp[buy_day + 30][j + 1])
                } else {
                    dp[i][j] = Math.min(dp[i][j], c[2] + 0)
                }
            }
            // console.log(dp[i])
        }
        // console.log(dp)
        console.log(dp[1][0])
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