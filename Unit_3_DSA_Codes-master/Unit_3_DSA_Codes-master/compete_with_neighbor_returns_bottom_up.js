function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    
    let dp = []
    for (let i = 0;i < n;i++) {
        let temp = []
        for (let j = 0;j < n;j++) {
            temp.push([0, 0])
        }
        dp.push(temp)
    }
    
    for (let i = 0;i < n;i++) {
        dp[i][i] = [arr[i], 0]
    }
    
    for (let i = n - 2;i >= 0;i --) {
        for (let j = i + 1;j < n;j++) {
            let left = [arr[i] + dp[i + 1][j][1], dp[i + 1][j][0]]
            let right = [arr[j] + dp[i][j - 1][1], dp[i][j - 1][0]]
            if (left[0] > right[0]) {
                dp[i][j] = left
            } else {
                dp[i][j] = right
            }
        }
    }
    
    console.log(dp[0][n - 1].join(' '))
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