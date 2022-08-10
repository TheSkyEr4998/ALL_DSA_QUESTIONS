function doit(input) {
    let lines = input.split('\n')
    
    let t = parseInt(lines[0])
    
    for(let i = 1;i <= t;i++) {
        let [a, b, c, k] = lines[i].trim().split(' ').map(Number)
        
        let l = 0
        let r = k
        let ans = -1
        
        while (l <= r) {
            let mid = l + parseInt((r - l) / 2)
            
            let val = (a * mid * mid) + (b * mid) + c
            
            if (val >= k) {
                r = mid - 1
                ans = mid
            } else {
                l = mid + 1
            }
        }
        
        if (ans == 0) {
            console.log(-1)
        } else {
            console.log(ans)
        }
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