function doit(input) {
    let lines = input.split('\n')
    let [n, r] = lines[0].trim().split(' ').map(Number)
    let arr = lines[1].trim().split(' ').map(Number)
    
    if (rec(arr, 0, r, {})) {
        console.log("Party")
    } else {
        console.log("No Party")
    }
}

function rec(arr, curi, cur, dp) {
    
    if (cur == 0) {
        return true
    }
    
    if (cur < 0) {
        return false
    }
    
    if ([curi, cur] in dp) {
        return dp[[curi, cur]]
    }
    
    let ans = rec(arr, curi + 1, cur - arr[curi], dp) || rec(arr, curi + 1, cur, dp);
    
    dp[[curi, cur]] = ans
    
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