function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    while(t--) {
        let c = lines[line].trim().split(' ').map(Number)
        line++
        let n = parseInt(lines[line])
        line++
        let arr = lines[line].trim().split(' ').map(Number)
        line++
        
        console.log(rec(arr, c, 1, 0, {}))
    }
    
}

function rec(arr, c, curt, curi, dp) {
    if (curi >= arr.length || curt > 365) {
        return 0
    }
    
    if ([curt, curi] in dp) {
        return dp[[curt, curi]]
    }
    
    
    let when_to_buy = curt
    let ans = 10000000008
    
    if (curt > arr[curi]) {
        ans = rec(arr, c, curt, curi + 1, dp)
    } else {
        when_to_buy = arr[curi]
    }
    
    ans = Math.min(ans, c[0] + rec(arr, c, when_to_buy + 1, curi + 1, dp))
    ans = Math.min(ans, c[1] + rec(arr, c, when_to_buy +  7, curi + 1, dp))
    ans = Math.min(ans, c[2] + rec(arr, c, when_to_buy +  30, curi + 1, dp))
    
    dp[[curt, curi]] = ans
    
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