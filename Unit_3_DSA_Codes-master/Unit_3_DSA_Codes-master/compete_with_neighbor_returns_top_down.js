function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    
    console.log(rec(arr, 0, n - 1, {}).join(" "))
}

function rec(arr, l, r, dp) {
    
    if (l == r) {
        return [arr[l], 0]
    }
    
    if ([l, r] in dp) {
        return dp[[l, r]]
    }
    
    let left = rec(arr, l + 1, r, dp)
    let lans = arr[l] + left[1]
    let right = rec(arr, l, r - 1, dp)
    let rans = arr[r] + right[1]
    
    let ans = [rans, right[0]]
    
    if (lans > rans) {
        ans = [lans, left[0]]
    }
    
    dp[[l, r]] = ans
    
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