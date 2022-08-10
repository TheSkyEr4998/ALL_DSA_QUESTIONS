function doit(input) {
    let s = input
    
    let dp = new Array(s.length)
    let ct = 0
    
    for (let i = s.length - 1;i >= 0;i--) {
        if (parseInt(s[i]) % 2 == 0) {
            ct += 1
        }
        dp[i] = ct
    }
    
    console.log(dp.join(' '))
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