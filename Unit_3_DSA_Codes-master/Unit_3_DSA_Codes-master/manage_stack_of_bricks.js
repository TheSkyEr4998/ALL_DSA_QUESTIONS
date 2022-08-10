function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    while (t --) {
        let n = parseInt(lines[line])
        let x = parseInt(lines[line + 1])
        let y = parseInt(lines[line + 2])
        line += 3
        let pre = []
        let neww = []
        for (let i = 0;i < n;i++) {
            let tt = lines[line].trim().split(' ').map(Number)
            pre.push(tt[0])
            neww.push(tt[1])
            line++
        }
        
        pre.sort((a, b) => a - b)
        neww.sort((a, b) => a - b)
        
        let ans = 0
        
        for (let i = 0;i < n;i++) {
            if (pre[i] > neww[i]) {
                ans += (y * (pre[i] - neww[i]))
            } else {
                ans += (x * (neww[i] - pre[i]))
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
