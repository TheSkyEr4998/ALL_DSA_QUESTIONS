function doit(input) {
    let lines = input.split('\n')
    let line = 0
    let t = parseInt(lines[line])
    line ++
    
    while (t --) {
        let [a, b, n, mod] = lines[line].trim().split(' ').map(Number)
        line++
        
        let ma = {}
        ma[a] = 1
        if (b != a) {
            ma[b] = 1
        } else {
            ma[b] ++
        }
        for (let i = 2;i < n;i++) {
            let tt = (a + b) % mod
            a = b
            b = tt
            if (!(tt in ma)) {
                ma[tt] = 1
            } else {
                ma[tt] += 1
            }
        }
        
        let ans = 0
        
        for (m in ma) {
            ans += ma[m] * ma[m]
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