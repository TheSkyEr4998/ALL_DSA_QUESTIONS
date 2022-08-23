function doit(input) {
    let lines = input.split('\n')
    
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    
    console.log(find_min(arr))
}

function find_min(arr) {
    let l = 0
    let r = arr.length - 1
    
    while (l <= r) {
        let mid = l + parseInt((r - l) / 2)
        if (l < mid && arr[mid - 1] > arr[mid]) {
            return arr[mid]
        }
        
        if (mid < r && arr[mid] > arr[mid + 1]) {
            return arr[mid + 1]
        }
        
        if (arr[l] >= arr[mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    
    return arr[0]
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