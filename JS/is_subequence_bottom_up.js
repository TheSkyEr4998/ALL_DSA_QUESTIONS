function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let s1 = lines[line].trim()
        line++
        let s2 = lines[line].trim()
        line++
        
        let dp = []
        for (let i = 0;i < s1.length;i++) {
            let temp = []
            for (let j = 0;j < s2.length;j++) {
                temp.push(false)
            }
            dp.push(temp)
        }
        
        dp[0][0] = (s1[0] == s2[0])
        for (let j = 1;j < s2.length;j++) {
            dp[0][j] = (dp[0][j - 1] || (s1[0] == s2[j]))
        }
        
        for (let i = 1;i < s1.length;i++) {
            dp[i][0] = false
        }
        for (let i = 1;i < s1.length;i++) {
            for (let j = 1;j < s2.length;j++) {
                dp[i][j] = dp[i][j - 1]
                if (s1[i] == s2[j]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j - 1]
                }
            }
        }
        if (dp[s1.length - 1][s2.length - 1]) {
            console.log("YES")
        } else {
            console.log("NO")
        }
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