function doit(input) {
    let lines = input.split('\n')
    let [n, m] = lines[0].trim().split(' ').map(Number)
    let arr = lines[1].trim().split(' ').map(Number)
    
    console.log(rec(arr, n, 0, 0, {}))
}

function rec(arr, req_sum, cur, sum, dp) {
    if (sum == req_sum) {
        return 1
    }
    
    if (sum > req_sum) {
        return 0
    }
    
    if (cur >= arr.length) {
        return 0
    }
    
    if ([cur, sum] in dp) {
        return dp[[cur, sum]]
    }
    
    let ans = rec(arr, req_sum, cur, sum + arr[cur], dp) + rec(arr, req_sum, cur + 1, sum, dp)
    
    dp[[cur, sum]] = ans
    
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