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
        
        let ans = []
        for (let i = 0;i <= n;i++) {
            ans.push([0, 0, 0])
        }
        for (let i = n - 1;i >= 0;i--) {
            ans[i][0] = costs[i][0] + Math.min(ans[i + 1][1], ans[i + 1][2])
            ans[i][1] = costs[i][1] + Math.min(ans[i + 1][0], ans[i + 1][2])
            ans[i][2] = costs[i][2] + Math.min(ans[i + 1][0], ans[i + 1][1])
        }
        console.log(Math.min(ans[0][0], Math.min(ans[0][1], ans[0][2])))
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