function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let n = parseInt(lines[line])
        line++
        
        let arr = []
        for (let i = 0;i < n;i++) {
            arr.push(lines[line].trim().split(' ').map(Number))
            line++
        }
        arr.push([1000000008, 1000000008])
        arr.sort((a, b) => {
            if (a[0] == b[0]) {
                return b[1] - a[1]
            }
            return b[0] - a[0]
        })
        
        console.log(rec(arr, 1, 0, {}))
    }
}

function rec(arr, curi, prei, dp) {
    if (curi >= arr.length) {
        return 0
    }
    
    if ([curi, prei] in dp) {
        return dp[[curi, prei]]
    }
    
    let ans = rec(arr, curi + 1, prei, dp)
    
    if (arr[curi][0] < arr[prei][0] && arr[curi][1] < arr[prei][1]) {
        ans = Math.max(ans, arr[curi][1] + rec(arr, curi + 1, curi, dp))
    }
    
    dp[[curi, prei]] = ans
    
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