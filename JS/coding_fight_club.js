function doit(input) {
    let lines = input.split('\n')
    let line = 0
    let n = parseInt(lines[0])
    line ++
    let arr = []
    
    for (let i = 1;i <= n;i++) {
        let tt = parseInt(lines[line])
        arr.push(tt)
        line++
    }
    
    arr.sort((a, b) => a - b)
    
    let prefix_sum = []
    let cur_sum = 0
    
    for (let i = 0;i < n;i++) {
        cur_sum += arr[i]
        prefix_sum.push(cur_sum)
    }
    
    let q = parseInt(lines[line])
    line++
    
    for (let i = 0;i < q;i++) {
        let m = parseInt(lines[line])
        line++
        
        let l = 0
        let r = n - 1
        let pos = -1
        
        while (l <= r) {
            let mid = l + parseInt((r - l) / 2)
            
            if (arr[mid] <= m) {
                l = mid + 1
                pos = mid
            } else {
                r = mid - 1
            }
        }
        console.log((pos + 1) + " " + prefix_sum[pos])
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