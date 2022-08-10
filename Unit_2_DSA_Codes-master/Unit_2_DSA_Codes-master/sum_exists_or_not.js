function is_subset_possible(arr, sum, i, cur_sum) {
    
    if (sum == cur_sum) {
        return true
    }
    
    if (i >= arr.length) {
        return false
    }
    
    return is_subset_possible(arr, sum, i + 1, cur_sum + arr[i])
            || is_subset_possible(arr, sum, i + 1, cur_sum)
}

function doit(input) {
    
    let lines = input.split('\n')
    
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    let sum = parseInt(lines[2])
    
    console.log(is_subset_possible(arr, sum, 0, 0) ? "yes" : "no")
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