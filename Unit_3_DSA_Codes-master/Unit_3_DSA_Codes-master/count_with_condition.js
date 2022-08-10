function doit(input) {
    let lines = input.split('\n')
    let [n, sum] = lines[0].trim().split(' ').map(Number)
    let arr = lines[1].trim().split(' ').map(Number)
    
    console.log(rec(arr, sum, 0, 0))
}

function rec(arr, sum, i, cur_sum) {
    if (cur_sum == sum) {
        return 1
    }
    
    if (i >= arr.length) {
        return 0
    }
    
    return rec(arr, sum, i + 1, cur_sum + arr[i]) + rec(arr, sum, i + 1, cur_sum)
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