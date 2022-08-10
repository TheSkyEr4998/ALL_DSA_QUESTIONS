function doit(input) {
    var lines = input.trim().split('\n')
    var [n, k] = lines[0].trim().split(' ').map(Number)
    
    var arr = lines[1].trim().split(' ').map(Number)

    for (var i = 0;i < n - 1;i++) {
        for(var j = 0;j<n-i-1;j++) {
            if (arr[j] % k > arr[j + 1] % k) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    console.log(arr.join(' '))
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