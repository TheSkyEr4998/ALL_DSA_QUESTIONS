function doit(input) {
    var lines = input.trim().split('\n')
    var n = parseInt(lines[0])
    
    var arr = lines[1].trim().split(' ').map(Number)
    arr_len = 2 * n

    arr.sort((a, b) => a - b)

    var sum = 0

    for (var i = 1;i < arr_len;i += 2) {
        sum += Math.min(arr[i], arr[i - 1])
    }

    console.log(sum)
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