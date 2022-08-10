function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    while(t--) {
        let [n] = lines[line].trim().split(' ').map(Number)
        line++
        let arr = lines[line].trim().split(' ').map(Number)
        line++
        
        let dp = new Array(n).fill(0)
        dp[0] = arr[0]
        for (let i = 1;i < n;i++) {
            dp[i] = Math.max(arr[i] + dp[i - 1], arr[i])
        }
        
        console.log(Math.max(...dp))
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