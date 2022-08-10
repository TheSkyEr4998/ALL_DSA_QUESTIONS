function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    
    console.log(rec(arr, 0, 0, {}))
}

function rec(arr, cur, pre, dp) {
    if (cur >= arr.length) {
        return 0
    }
    
    if ([cur, pre] in dp) {
        return dp[[cur, pre]]
    }
    
    let ans = rec(arr, cur + 1, pre, dp)
    if (arr[cur] > pre) {
        ans = Math.max(ans, 1 + rec(arr, cur + 1, arr[cur], dp))
    }
    
    dp[[cur, pre]] = ans
    
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