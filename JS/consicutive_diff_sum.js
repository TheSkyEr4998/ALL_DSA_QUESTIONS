function consicutive_diff_sum(arr, n, cur) {
    if (cur >= n) {
        return 0
    }
    
    return Math.abs(arr[cur] - arr[cur - 1]) + consicutive_diff_sum(arr, n, cur + 1)
}

function doit(input) {
    var lines = input.split('\n')
    
    var t = parseInt(lines[0])
    
    var line = 1
    
    while(t --) {
        var n = parseInt(lines[line])
        var arr = lines[line + 1].split(' ').map(Number)
        
        line += 2
        
        console.log(consicutive_diff_sum(arr, n, 1))
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