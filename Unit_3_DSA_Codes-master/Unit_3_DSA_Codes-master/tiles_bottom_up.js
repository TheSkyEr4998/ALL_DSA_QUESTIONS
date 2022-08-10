function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let [h, w] = lines[line].trim().split(' ').map(Number)
        line++
        let arr = []
        for (let i = 0;i< h;i++) {
            let row = lines[line].trim().split(' ').map(Number)
            line++
            
            arr.push(row)
        }
        
        let dp = []
        for (let i = 0;i < h;i++) {
            let temp = []
            for (let j = 0;j < w;j++) {
                temp.push(0)
            }
            dp.push(temp)
        }
        
        for (let j = 0;j < w;j++) {
            dp[h - 1][j] = arr[h - 1][j]
        }
        
        for (let i = h - 2;i >= 0;i--) {
            for (let j = 0;j < w;j++) {
                let ans = 0
                if (j - 1 >= 0) {
                    ans = Math.max(ans, dp[i + 1][j - 1])
                }
                ans = Math.max(ans, dp[i + 1][j])
                if (j + 1 < w) {
                    ans = Math.max(ans, dp[i + 1][j + 1])
                }
                
                dp[i][j] = arr[i][j] + ans
            }
        }
        
        let ans = 0
        for (let j = 0;j < w;j++) {
            if (dp[0][j] > ans) {
                ans = dp[0][j]
            }
        }
        
        console.log(ans)
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