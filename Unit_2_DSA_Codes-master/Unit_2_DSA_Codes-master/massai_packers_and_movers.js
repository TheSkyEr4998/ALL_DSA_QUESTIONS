function count_it(arr, w) {
    
    if (w == 0) {
        return 1
    }
    
    if (w < 0) {
        return 0
    }
    
    let ans = 0
    
    for (let i = 0;i < arr.length;i++) {
        ans += count_it(arr, w - arr[i])
    }
    
    return ans
    
}

function doit(input) {
    let lines = input.trim().split('\n')
    let [k, n] = lines[0].trim().split(' ').map(Number)
    
    let arr = lines[1].trim().split(' ').map(Number)
    
    console.log(count_it(arr, k))
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