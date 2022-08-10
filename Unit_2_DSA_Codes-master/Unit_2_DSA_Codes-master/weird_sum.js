function has_sum(arr, n, largest, cur_index, cur_sum) {
    if (cur_sum == largest) {
        return true
    }
    
    if (cur_index >= n) {
        return false
    }
    
    return has_sum(arr, n, largest, cur_index + 1, cur_sum)
            || has_sum(arr, n, largest, cur_index + 1, cur_sum + arr[cur_index])
}

function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    for (let i = 1;i <= t;i++) {
        let n = parseInt(lines[line])
        let arr = lines[line + 1].split(' ').map(Number)
        
        line += 2
        
        let largest = arr[0]
        for (let j = 1;j < arr.length;j ++) {
            if (arr[j] > largest) {
                largest = arr[j]
            }
        }
        
        let new_arr = arr.filter(x => x != largest)
        
        if (has_sum(new_arr, n, largest, 0, 0)) {
            console.log("Yes")
        } else {
            console.log("No")
        }
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