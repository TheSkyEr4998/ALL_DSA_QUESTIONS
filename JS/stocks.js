function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let n = parseInt(lines[line])
        line++
        let arr = lines[line].trim().split(' ').map(Number)
        line++
        
        let suf_max = new Array(n + 1)
        suf_max[n] = 0
        for (let i = n - 1;i >= 0;i --) {
            suf_max[i] = arr[i]
            if (suf_max[i + 1] > suf_max[i]) {
                suf_max[i] = suf_max[i + 1]
            }
        }
        
        let ans = 0
        for (let i = 0;i < n;i++) {
            ans = Math.max(ans, suf_max[i + 1] - arr[i])
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