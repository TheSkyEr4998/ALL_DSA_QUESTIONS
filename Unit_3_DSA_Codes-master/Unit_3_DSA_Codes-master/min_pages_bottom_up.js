function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let n = parseInt(lines[line])
        line++
        
        /*
        state - number_of_problems_solved
        
        number_of_problems_solved -> + 10
                                  -> + 12
                                  
        base case - 
        number_of_problems_solved == n -> 0 (you don't need any more pages)
        number_of_problems_solved > n -> infinity (not possible to NOT waste space)
        */  
        
        let dp = []
        for (let i = 0 ;i <= n;i++) {
            dp.push(1000000008)
        }
        
        dp[n] = 0
        
        for (let i = n - 2;i >= 0;i--) {
            if (i + 10 <= n) {
                dp[i] = Math.min(dp[i], 1 + dp[i + 10])
            }
            if (i + 12 <= n) {
                dp[i] = Math.min(dp[i], 1 + dp[i + 12])
            }
        }
        
        let ans = dp[0]
        
        if (ans > 113) {
            console.log(-1)
        } else {
            console.log(ans)
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