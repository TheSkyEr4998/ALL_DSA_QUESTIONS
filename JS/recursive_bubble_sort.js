function bubble_sort(arr, n) {
    if (n == 1) {
        return
    }
    
    for (var i = 0;i < n - 1;i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
    
    bubble_sort(arr, n - 1)
}

function doit(input) {
    var lines = input.split('\n')
    
    var n = parseInt(lines[0])
    var arr = lines[1].split(' ').map(Number)
    
    bubble_sort(arr, n)
    
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