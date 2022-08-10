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
        
        console.log(rec(arr, s, 0, 0, {}))
    }
}

function rec(arr, s, cur, curW, dp) {
    if (cur >= arr.length) {
        return 0
    }
    
    if ([cur, curW] in dp) {
        return dp[[cur, curW]]
    }
    
    let ans = rec(arr, s, cur + 1, curW, dp)
    if (curW + arr[cur][0] <= s) {
        ans = Math.max(ans, arr[cur][1] + rec(arr, s, cur + 1, curW + arr[cur][0], dp))
    }
    
    dp[[cur, curW]] = ans
    
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