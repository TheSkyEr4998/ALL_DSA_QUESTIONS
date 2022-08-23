function doit(input) {
    let lines = input.split('\n')
    
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    
    if (n == 1) {
        console.log("YES")
        return
    }
    
    let ct = 0
    
    for (let i = 1;i < n;i++) {
        if (arr[i - 1] > arr[i]) {
            ct ++
        }
    }
    
    if (ct == 1) {
        if (arr[0] < arr[n - 1]) {
            console.log("NO")
            // this means the array is not sorted at all
            // because if ct == 1 and array was initially sorted,
            // arr[0] has to be greater than arr[n - 1]
        } else {
            console.log("YES")
            // this is the only case where array was originally sorted and then rotated
            // ct == 1 and arr[0] > arr[n - 1]
        }
    } else {
        console.log("NO")
        // this can mean that the array is sorted and not rotated (ct == 0)
        // or it can mean that the array is not at all sorted (Ct > 1)
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