function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    
    let ans = arr[0]
    let cur = arr[0]
    
    for (let i = 1;i < arr.length;i++) {
        if (cur > arr[i]) {
            cur = arr[i]
        }
        ans += cur
    }
    
    console.log(ans)
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