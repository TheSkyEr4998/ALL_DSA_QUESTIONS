function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let s = lines[line]
        line++
        let new_s = lines[line]
        line++
        
        let dp = []
        for (let si = 0;si <= s.length;si ++) {
            let temp = []
            for (let nsi = 0;nsi <= new_s.length;nsi++) {
                temp.push(0)
            }
            dp.push(temp)
        }
        
        for (let si = 1;si <= s.length;si++) {
            dp[si][0] = si
        }
        
        for (let nsi = 1;nsi <= new_s.length;nsi++) {
            dp[0][nsi] = nsi
        }
        
        for (let si = 1;si <= s.length;si++) {
            for (let nsi = 1;nsi <= new_s.length;nsi++) {
                if (s[si - 1] == new_s[nsi - 1]) {
                    dp[si][nsi] = dp[si - 1][nsi - 1]
                } else {
                    dp[si][nsi] = 1 +
                            Math.min(dp[si - 1][nsi],
                                     Math.min(dp[si][nsi - 1],
                                              dp[si - 1][nsi - 1]))
                }
            }
        }
        
        console.log(dp[s.length][new_s.length])
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