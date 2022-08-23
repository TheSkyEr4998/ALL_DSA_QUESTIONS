function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    while(t --) {
        let n = parseInt(lines[line])
        line++
        let costs = []
        for (let i = 0;i < n;i++) {
            costs.push(lines[line].trim().split(' ').map(Number))
            line++
        }
        console.log(rec(costs, 0, -1, {}))
    }
}

function rec(costs, cur, pre, dp) {
    if (cur >= costs.length) {
        return 0
    }
    
    if ([cur, pre] in dp) {
        return dp[[cur, pre]]
    }
    
    let ans = Infinity
    for (let i = 0;i < 3;i++) {
        if (i != pre) {
            ans = Math.min(ans, costs[cur][i] + rec(costs, cur + 1, i, dp))
        }
    }
    
    dp[[cur, pre]] = ans
    
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